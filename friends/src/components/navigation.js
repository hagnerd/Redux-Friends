import React from "react";
import { withRouter, Link } from "react-router-dom";

function Navigation({ history, match }) {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return token ? (
    <div className="bg-white w-full border-b border-gray-300 shadow-md">
      <div className="flex w-3/4 mx-auto justify-around">
        <Link to="/">
          <h2 className="text-4xl font-bold text-blue-700">
            Friends
            <span className="text-green-400">R</span>
            Us
          </h2>
        </Link>
        <nav className="w-1/2">
          <ul className="flex justify-around items-center h-full">
            <li>
              <Link
                className="text-blue-600 font-bold hover:text-blue-800"
                to="/friends"
              >
                Friends
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 font-bold hover:text-blue-800"
                to="/friends/new"
              >
                Add a New Friend
              </Link>
            </li>
            <li>
              <button
                className="text-blue-600 font-bold hover:text-blue-800"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  ) : null;
}

export default withRouter(Navigation);
