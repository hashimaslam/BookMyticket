import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useForm } from "react-hook-form";
import desktopImage from "../../assets/images/back.jpg";
import * as legoLoader from "../../assets/legoLoader.json";
import * as checkeDone from "../../assets/checkeDone.json";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import Alert from "react-bootstrap/Alert";
import LoadingOverlay from "react-loading-overlay";
import Logo from "../Header/Logo";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    // axios
    //   .post(
    //     "https://bookmyticket-app-movies.herokuapp.com/userSignup/add",
    //     data
    //   )
    //   .then(res => {
    //     console.log(res.data);
    //     alert(res.data);
    //     history.push("/");
    //   })
    //   .catch(err => {
    //     alert("email or username already exists");
    //   });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoLoader.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: checkeDone.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const LoadingContent = props => {
    return (
      <>
        {" "}
        <FadeIn>
          <div class="d-flex justify-content-center align-items-center">
            <h1>Cooking Your Content</h1>

            {props.loading ? (
              <Lottie options={defaultOptions} height={120} width={120} />
            ) : (
              <Lottie options={defaultOptions2} height={120} width={120} />
            )}
          </div>
        </FadeIn>
      </>
    );
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      number: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Username is Required"),
      number: Yup.string()
        .max(10, "Invalid Phone Number")
        .min(10, "Invalid Phone Number")
        .required("Phone number is required"),
      password: Yup.string()
        .min(6, `Password has to be longer than 6 characters!`)
        .required("Password is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required")
    }),
    onSubmit: values => {
      setLoading(prev => !prev);
      console.log(values);

      axios
        .post(
          "https://bookmyticket-app-movies.herokuapp.com/userSignup/add",
          values
        )
        .then(res => {
          setLoading(prev => !prev);
          history.push("/");
        })
        .catch(err => {
          setLoading(prev => !prev);
          setShow(prev => !prev);
        });
    }
  });
  return (
    <>
      <LoadingOverlay
        active={loading}
        spinner={<LoadingContent loading={loading} />}
      >
        <div style={{ backgroundColor: "black", height: "100%" }}>
          <div
            style={{
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
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
            <Container>
              <Row>
                <Col className="mt-5" sm={6}>
                  <h1 class="display-4 text-danger">BookMyticket</h1>
                  <p className="text-white login-info">
                    The one stop for all your entertainment, Booktickets,
                    Explore Movies and What Not !!
                  </p>
                </Col>
                <Col></Col>
                <Col sm={4} className="mt-lg-5">
                  <h2 className="text-white">SignUp!</h2>
                  <hr />
                  <div className="login-form-container">
                    <Form onSubmit={formik.handleSubmit} noValidate>
                      <Form.Group controlId="formBasicName">
                        <Form.Label className="text-white">UserName</Form.Label>
                        <Form.Control
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Username"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.username}
                          isInvalid={
                            formik.touched.username && formik.errors.username
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.username}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formBasicPhone">
                        <Form.Label className="text-white">
                          Contact Number
                        </Form.Label>
                        <Form.Control
                          id="number"
                          name="number"
                          type="number"
                          placeholder="number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.number}
                          isInvalid={
                            formik.touched.number && formik.errors.number
                          }
                        />

                        <Form.Control.Feedback type="invalid">
                          {formik.errors.number}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-white">
                          Email address
                        </Form.Label>
                        <Form.Control
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          isInvalid={
                            formik.touched.email && formik.errors.email
                          }
                        />

                        <Form.Control.Feedback type="invalid">
                          {formik.errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Text className="text-muted text-white">
                        We'll never share your email with anyone else.
                      </Form.Text>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
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
                          Register
                        </Button>
                        <p
                          className="text-white m-0"
                          style={{ display: "inline-block", fontSize: "16px" }}
                        >
                          or
                        </p>
                        <Link to="/login">
                          <Button
                            variant="outline-danger"
                            type="button"
                            className="ml-3"
                          >
                            Login
                          </Button>
                        </Link>
                      </span>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </LoadingOverlay>
    </>
  );
}

export default SignUp;
