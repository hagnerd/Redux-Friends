import React from "react";
import { Link } from "react-router-dom";
import Friend from "./friend";

export default function FriendsList({ friends }) {
  return (
    <div className="flex">
      <ul className="w-1/2 mx-auto">
        {friends.map(friend => (
          <li
            className="bg-white rounded-lg shadow-md p-5 mb-3"
            key={friend.id}
          >
            <Link to={`/friends/${friend.id}`}>
              <Friend {...friend} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
