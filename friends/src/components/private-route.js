import React from "react";
import { Redirect, Route } from "react-router-dom";

/*
 * We wrap `Route` in PrivateRoute so that if the user isn't
 * authenticated they'll be redirected to the `/login` page
 * */
export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        const token = localStorage.getItem("token");

        return token ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
}
