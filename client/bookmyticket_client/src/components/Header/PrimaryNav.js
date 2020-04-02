import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
import CityModal from "../CityModal/CityModal";
import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MainContext } from "../App";
import { useHistory } from "react-router-dom";
// import Container from "react-bootstrap/Container";
import Logo from "./Logo";

const PrimaryNav = () => {
  // const [modal, setModal] = useState(false);
  const maincontext = useContext(MainContext);
  const modalShow = maincontext.state.modalShow;
  const history = useHistory();

  const handleModalClick = () => {
    maincontext.dispatcher({ type: "Close Modal", payload: !modalShow });
    console.log(modalShow);
  };
  const handleSignout = () => {
    localStorage.clear();
    sessionStorage.clear();
    maincontext.dispatcher({ type: "Close Modal", payload: !modalShow });
    history.push("/login");
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="primary-nav"
      >
        <Navbar.Brand className="ml-lg-5">
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
            <Nav.Link
              className=" pr-lg-3 primary-link mt-sm-2"
              onClick={handleModalClick}
            >
              {maincontext.state.city}
            </Nav.Link>
            <CityModal />
            <div className=" pr-lg-3 py-sm-2">
              <NavDropdown
                title="Hello!"
                id="basic-nav-dropdown"
                className="primary-link"
              >
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>action</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
          <Nav className="mr-lg-5">
            <Button
              // variant="outline-light"
              size="sm"
              className="primary-button mr-lg-5"
              onClick={handleSignout}
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
