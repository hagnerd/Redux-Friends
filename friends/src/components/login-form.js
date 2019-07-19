import React from "react";
import PropTypes from "prop-types";

import Input from "./input";
import Label from "./label";

export default class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props
      .login(username, password)
      .then(() => {
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { username, password } = this.state;
    const { isLoading, errorMessage } = this.props;

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-700 mt-3">
          Friends<span className="text-green-400">R</span>Us
        </h1>
        {errorMessage ? (
          <p style={{ color: "red" }}>{errorMessage}</p>
        ) : (
          <div style={{ height: "42px" }} />
        )}
        <form
          className="w-64 flex flex-col bg-blue-500 p-6 rounded shadow-lg"
          onSubmit={this.handleSubmit}
        >
          <Label htmlFor="username">Username:</Label>
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={this.handleChange}
          />
          <br />

          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />

          {!isLoading ? (
            <button
              className="bg-blue-800 border border-blue-800 rounded text-white px-3 py-1 uppercase text-sm hover:bg-blue-900"
              type="submit"
            >
              Login
            </button>
          ) : (
            <p>Loading...</p>
          )}
        </form>
      </div>
    );
  }
}
