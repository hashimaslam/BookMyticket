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
import Logo from "../Header/Logo";
import axios from "axios";

function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = data => {
    console.log(data);
    axios
      .post("http://localhost:5000/userSignup/add", data)
      .then(res => {
        console.log(res.data);
        alert(res.data);
        history.push("/");
      })
      .catch(err => {
        alert("email or username already exists");
      });
  };

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

      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <h2 className="text-white">SignUp!</h2>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicName">
                <Form.Label className="text-white">UserName</Form.Label>
                <Form.Control
                  name="username"
                  placeholder="Enter username"
                  ref={register({ required: true })}
                />
              </Form.Group>
              {errors.username && alert("Please Enter UserName!")}

              <Form.Group controlId="formBasicPhone">
                <Form.Label className="text-white">Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  name="number"
                  placeholder="Enter your number"
                  ref={register({ required: true, minLength: 10 })}
                />
              </Form.Group>
              {errors.number && alert("Please Enter Valid Phone Number!")}

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  ref={register({ required: true })}
                />
                <Form.Text className="text-muted text-white">
                  We'll never share your email with anyone else.
                </Form.Text>
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
                Register
              </Button>
              <br />
              <Link to="/login">
                <Button variant="primary" type="button" className="mt-3">
                  LoginHere!
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
