import React, { useState } from "react";
// import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Header/Logo";
import desktopImage from "../../assets/images/back.jpg";
// import mobileImage from "../../assets/images/image1.jpg";
// import contactus from "../../assets/images/contactus.png";
import axios from "axios";

function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onSubmit = data => {
    console.log(data);
    axios
      .post(
        "https://bookmyticket-app-movies.herokuapp.com/userSignup/login",
        data
      )
      .then(res => {
        if (res.data === "Invalid password or Email") {
          alert(res.data);
        } else {
          console.log(res);
          alert("successfully login");

          localStorage.setItem("user", JSON.stringify(res.data));
          history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
        alert("incorrect username or password");
      });
  };

  // const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  // const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //     window.addEventListener('resize', handleWindowResize);

  //     return () => {
  //         window.removeEventListener('resize', handleWindowResize);
  //     }
  // });

  return (
    <div
      style={{
        backgroundImage: "url(" + desktopImage + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "625px"
      }}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="primary-nav"
      >
        <Navbar.Brand href="" className="ml-lg-5">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col className="mt-5">
            <h1 className="text-white">Login Here!</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  ref={register({ required: true })}
                />
              </Form.Group>
              {errors.email && alert("Please Enter Email!")}

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register({ required: true, minLength: 6 })}
                />
              </Form.Group>
              {errors.password &&
                alert("Password Required minimum 6 character")}

              <Button variant="primary" type="submit">
                Login
              </Button>

              <br />
              <Link to="/signup">
                <Button variant="primary" type="button" className="mt-2">
                  RegisterHere!
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
