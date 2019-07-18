import React from "react";
import { Link } from "react-router-dom";
import Friend from "./friend";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Link to={`/friends/${friend.id}`}>
            <Friend {...friend} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
