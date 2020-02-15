import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const SecondaryNav = () => {
  return (
    <div>
      <Nav as="ul" className="secondary-nav">
        <Nav.Item as="li" className="ml-lg-5">
          <Nav.Link className="secondary-link">
            <Link
              className="secondary-link"
              to="/movies"
              style={{ textDecoration: "none" }}
            >
              Movies
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="secondary-link">
            <Link
              className="secondary-link"
              to="/sports"
              style={{ textDecoration: "none" }}
            >
              Sports
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="secondary-link">
            <Link
              className="secondary-link"
              to="/events"
              style={{ textDecoration: "none" }}
            >
              Events
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="secondary-link">
            <Link
              className="secondary-link"
              to="/buzz"
              style={{ textDecoration: "none" }}
            >
              Buzz
            </Link>
          </Nav.Link>
        </Nav.Item>
        <div className="mr-auto"></div>
        <Nav.Item as="li" className="mr-lg-3">
          <Nav.Link className="secondary-link-muted mr-lg-5  pr-lg-5">
            contact us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SecondaryNav;
