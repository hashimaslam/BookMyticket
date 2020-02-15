import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";
import Logo from "./Logo";
const PrimaryNav = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="primary-nav"
      >
        <Navbar.Brand href="#home" className="ml-lg-5">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <Logo />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Form inline className="mr-auto navbar-search">
            <FormControl
              type="text"
              placeholder="Search "
              className="mr-sm-2 navbar-search"
            />
          </Form> */}
          <form className="form-inline mr-auto">
            <input
              className="form-control mr-sm-2 navbar-search"
              type="search"
              placeholder="Search for Movies, Sports, TvShows and more"
              aria-label="Search"
            />
          </form>
          <Nav>
            <Nav.Link className="primary-link pr-lg-3">
              <NavDropdown title="Bengaluru" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            <Nav.Link className=" pr-lg-3">
              <NavDropdown
                title="Hello!"
                id="basic-nav-dropdown"
                className="primary-link"
              >
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">action</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
          <Nav className="mr-lg-5">
            <Button
              // variant="outline-light"
              size="sm"
              className="primary-button mr-lg-5 "
            >
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default PrimaryNav;
