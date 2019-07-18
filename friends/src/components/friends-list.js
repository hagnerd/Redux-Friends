import React from "react";
import Friend from "./friend";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend {...friend} />
        </li>
      ))}
    </ul>
  );
}
