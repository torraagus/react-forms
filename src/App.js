import React, { Component } from "react";
import HookForm from "./components/hookForm/hookForm.component";
import "./App.scss";

export default class App extends Component {  
  
  render() {
    return (
      <div>
        <h2>Login</h2>
        <HookForm />
      </div>
    );
  }
}
