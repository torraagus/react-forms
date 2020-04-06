import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./components/loginForm/loginForm.component";
import NavBar from "./components/navBar/navbar.component";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Grid fluid className="mt-5">
          <Row center="xs">
            <Col>
              <h2>Login</h2>
            </Col>
          </Row>
          <Row center="xs">
            <Col>
              <p>Complete the form below please</p>
            </Col>
          </Row>
          <Row center="xs" className="mt-3">
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}
