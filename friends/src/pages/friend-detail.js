import React from "react";
import Friend from "../components/friend";

function NoFriend() {
  return (
    <>
      <h2>No friend found with that ID</h2>
    </>
  );
}

export default function FriendDetailPage(props) {
  if (props.isFetchingFriends) {
    return <p>Currently fetching friends...</p>;
  }

  return props.friend ? <Friend {...props.friend} /> : <NoFriend />;
}
