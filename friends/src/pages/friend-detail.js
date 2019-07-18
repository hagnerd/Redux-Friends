import React from "react";
import { Link } from "react-router-dom";
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

  return props.friend ? (
    <>
      <Friend {...props.friend} />
      <Link to={`/friends/${props.friend.id}/edit`}>Edit Friend</Link>
      <button
        onClick={() => {
          // TODO: Implement deletion of user, which will be an action
          console.log("you clicked delete for user ", props.friend.id);
        }}
      >
        Delete Friend
      </button>
    </>
  ) : (
    <NoFriend />
  );
}
