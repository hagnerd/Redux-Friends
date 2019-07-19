import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../actions";

import LoginForm from "../components/login-form";

function Login(props) {
  return (
    <>
      <LoginForm {...props} />
    </>
  );
}

export default withRouter(
  connect(
    state => ({
      isLoading: state.isLoading,
      errorMessage: state.errorMessage
    }),
    { login }
  )(Login)
);
