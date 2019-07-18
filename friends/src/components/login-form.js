import React from "react";
import PropTypes from "prop-types";

export default class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isLoggingIn: PropTypes.bool.isRequired
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
        this.props.history.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { username, password } = this.state;
    const { isLoggingIn, errorMessage } = this.props;

    return (
      <>
        {errorMessage ? (
          <p style={{ color: "red" }}>{errorMessage}</p>
        ) : (
          <div style={{ height: "42px" }} />
        )}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />

          {!isLoggingIn ? (
            <button type="submit">Login</button>
          ) : (
            <p>Loading...</p>
          )}
        </form>
      </>
    );
  }
}
