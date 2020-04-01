import React, { Component } from "react";

export default class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      isSubmited: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit() {
    this.setState({
      isSubmited: true
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Simple Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Phone number:
            <input
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <input type="submit" value="Send" />
        </form>
        <br />
        {this.state.isSubmited && (
          <div>
            <h4>Datos enviados</h4>
            <p>
              <span>
                {this.state.name}
                {this.state.name != "" && <br />}
              </span>
              <span>
                {this.state.phone}
                {this.state.phone != "" && <br />}
              </span>
              <span>{this.state.address}</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}
