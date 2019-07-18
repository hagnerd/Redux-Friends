import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <>
      <h1>No Page Matching That URL</h1>

      <p>
        It appears that you URL you are trying to go to does not exist. Try
        visiting <Link to="/login">login</Link>, or{" "}
        <Link to="/">dashboard</Link>.
      </p>
    </>
  );
}
