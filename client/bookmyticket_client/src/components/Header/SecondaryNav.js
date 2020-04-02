import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const SecondaryNav = () => {
  return (
    <div>
      <Nav as="ul" className="secondary-nav">
        <Nav.Item as="li" className="ml-lg-5">
          <div className="py-sm-2 mr-lg-3 pl-3">
            <Link
              className="secondary-link mt-sm-5 mr-sm-4"
              to="/movies"
              style={{ textDecoration: "none" }}
            >
              Movies
            </Link>
          </div>
        </Nav.Item>
        {/* <Nav.Item as="li" >
            <div className="py-sm-2 mr-sm-5 disabled">
              <Link
                className="secondary-link"
                to="/sports"
                style={{ textDecoration: "none" }}
              >
                Sports
              </Link>
            </div>
          </Nav.Item>
        <Nav.Item as="li">
          <div className="py-sm-2 mr-sm-5">
            <Link
              className="secondary-link"
              to="/events"
              style={{ textDecoration: "none" }}
            >
              Events
            </Link>
          </div>
        </Nav.Item> */}
        <Nav.Item as="li">
          <div className="py-sm-2 mr-lg-3">
            <Link
              className="secondary-link"
              to="/buzz"
              style={{ textDecoration: "none" }}
            >
              Buzz
            </Link>
          </div>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SecondaryNav;
