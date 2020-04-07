import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Switch, Route, Link } from "react-router-dom";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

import RegisterForm from "../registerForm/registerForm.component";
import LoginForm from "../loginForm/loginForm.component";
import Home from "../home/home.component";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/">
          React-Forms
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <IndexLinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            <NavDropdown title="Pick a form" id="basic-nav-dropdown">
              <NavDropdown.Header>General</NavDropdown.Header>
              <LinkContainer to="/login">
                <NavDropdown.Item>Login form</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/register">
                <NavDropdown.Item>Register form</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Header>Others</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.3">New seller</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                New delivery
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}
