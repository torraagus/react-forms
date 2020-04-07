import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./components/loginForm/loginForm.component";
import NavBar from "./components/navBar/navbar.component";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  }
}
