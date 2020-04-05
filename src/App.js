import React, { Component } from "react";
import LoginForm from "./components/loginForm/loginForm.component";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
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
    );
  }
}
