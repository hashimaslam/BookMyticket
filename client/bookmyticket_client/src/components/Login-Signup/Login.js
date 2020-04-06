import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Bklogo from "../Header/bklogo";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import Logo from "../Header/Logo";
import desktopImage from "../../assets/images/back.jpg";
// import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import BarLoader from "react-spinners/BarLoader";
import * as legoLoader from "../../assets/legoLoader.json";
import * as checkeDone from "../../assets/checkeDone.json";
import axios from "axios";
import { useFormik } from "formik";
import Alert from "react-bootstrap/Alert";
import LoadingOverlay from "react-loading-overlay";
import * as Yup from "yup";
function Login() {
  const history = useHistory();
  // const { register, handleSubmit, errors } = useForm();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, `Password has to be longer than 6 characters`)
        .max(10, "Password Must be within 6 to 8 characters")
        .required("Password is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required")
    }),
    onSubmit: values => {
      setLoading(prev => !prev);
      console.log(values);
      let data = JSON.stringify(values, null, 2);
      axios
        .post(
          "https://bookmyticket-app-movies.herokuapp.com/userSignup/login",
          values
        )
        .then(res => {
          if (res.data === "Invalid password or Email") {
            setLoading(prev => !prev);
            setShow(prev => !prev);
          } else {
            console.log(res);
            setLoading(prev => !prev);
            localStorage.setItem("user", JSON.stringify(res.data));
            history.push("/");
          }
        })
        .catch(err => {
          setLoading(prev => !prev);
          setShow(prev => !prev);
        });
    }
  });
  const LoadingContent = props => {
    return (
      <>
        {" "}
        <FadeIn>
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <Bklogo
              animation={false}
              width="100px"
              height="100px"
              margin={"0px"}
            />
            <br />
            <BarLoader
              color={"#c02c39"}
              loading={props.loading}
              height={4}
              width={200}
            />
            {/* <h1 className="text-center">Loading Your Shows...</h1> */}
          </div>
        </FadeIn>
      </>
    );
  };

  return (
    <>
      <LoadingOverlay
        active={loading}
        spinner={<LoadingContent loading={loading} />}
      >
        <div
          style={{
            backgroundColor: "black",
            backgroundImage: "url(" + desktopImage + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh"
          }}
        >
          <Alert
            show={show}
            onClose={() => setShow(prev => !prev)}
            variant="danger"
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              It looks Like you have entered wrong email or password ,Please try
              register if you have not created an account yet
            </p>
          </Alert>
          <Container>
            <Row>
              <Col className="mt-5" sm={6}>
                <span class="display-4 text-white">
                  Book
                  <Bklogo
                    width={"60px"}
                    height={"60px"}
                    animation={false}
                    margin={"0"}
                    top={"10%"}
                  />
                  ticket
                </span>
                <p className="text-white login-info mt-2">
                  The one stop for all your entertainment, Booktickets, Explore
                  Movies and What Not !!
                </p>
              </Col>
              <Col></Col>
              <Col className="mt-5" sm={4}>
                <h1 className="text-white">Login Here!</h1>
                <hr />
                <div className="login-form-container">
                  <Form onSubmit={formik.handleSubmit} noValidate>
                    <Form.Group controlId="formBasicName">
                      <Form.Label className="text-white">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        isInvalid={formik.touched.email && formik.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        isInvalid={
                          formik.touched.password && formik.errors.password
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <span>
                      <Button variant="danger" type="submit" className="mr-3">
                        Login
                      </Button>
                      <p
                        className="text-white m-0"
                        style={{ display: "inline-block", fontSize: "16px" }}
                      >
                        or
                      </p>
                      <Link to="/signup">
                        <Button
                          variant="outline-danger"
                          type="button"
                          className="ml-3"
                        >
                          RegisterHere!
                        </Button>
                      </Link>
                    </span>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </LoadingOverlay>
    </>
  );
}

export default Login;
