import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Forms</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Pick one" id="basic-nav-dropdown">
            <small className="ml-3"><i>General</i></small>
            <NavDropdown.Item href="#action/3.1">Login form</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Register form
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <small className="ml-3"><i>Others</i></small>
            <NavDropdown.Item href="#action/3.3">New seller</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">New delivery</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
