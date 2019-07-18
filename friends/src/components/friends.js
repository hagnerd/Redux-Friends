import React from "react";

import FriendsList from "./friends-list";

export default function Friends(props) {
  const { friends, isFetchingFriends, errorMessage } = props;
  console.log(props);
  return (
    <>
      <h1>Friends</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {isFetchingFriends ? (
        <p>Fetching all of your friends now...</p>
      ) : (
        <FriendsList friends={friends} />
      )}
    </>
  );
}
