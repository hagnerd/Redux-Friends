import React from "react";
import { withRouter, Link } from "react-router-dom";

function Navigation({ history }) {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return token ? (
    <nav>
      <ul>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          <Link to="/friends/new">Add a New Friend</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  ) : null;
}

export default withRouter(Navigation);
