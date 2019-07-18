import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

import LoginForm from "../components/login-form";

function Login(props) {
  return (
    <>
      <LoginForm {...props} />
    </>
  );
}

export default connect(
  state => ({ isLoggingIn: state.loggingIn, errorMessage: state.errorMessage }),
  { login }
)(Login);
