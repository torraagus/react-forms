import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
