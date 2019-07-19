import React from "react";
import FriendsList from "./friends-list";

export default function Friends({ friends, isLoading, errorMessage }) {
  return (
    <>
      <h1 className="text-center text-2xl font-extrabold text-gray-800 my-4">
        Friends
      </h1>
      {errorMessage && (
        <p className="text-center text-2xl font-semibold text-red-500">
          {errorMessage}
        </p>
      )}

      {isLoading ? (
        <p className="text-center text-2xl font-semibold mt-2 text-orange-500">
          Fetching all of your friends now...
        </p>
      ) : (
        <FriendsList friends={friends} />
      )}
    </>
  );
}
