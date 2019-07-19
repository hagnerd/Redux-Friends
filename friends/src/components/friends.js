import React from "react";
import FriendsList from "./friends-list";

export default function Friends({ friends, isLoading, errorMessage }) {
  return (
    <>
      <h1 className="text-center text-2xl font-extrabold text-gray-800 my-4">
        Friends
      </h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {isLoading ? (
        <p>Fetching all of your friends now...</p>
      ) : (
        <FriendsList friends={friends} />
      )}
    </>
  );
}
