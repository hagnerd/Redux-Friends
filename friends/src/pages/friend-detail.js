import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Friend from "../components/friend";
import { deleteFriend } from "../actions";

function NoFriend() {
  return (
    <>
      <h2>No friend found with that ID</h2>
    </>
  );
}

function FriendDetailPage(props) {
  if (props.isLoading) {
    return <p>Currently fetching friends...</p>;
  }

  return props.friend ? (
    <>
      <Friend {...props.friend} />
      <Link to={`/friends/${props.friend.id}/edit`}>Edit Friend</Link>
      <button
        onClick={() => {
          props
            .deleteFriend(props.friend.id)
            .then(() => {
              props.history.push("/friends");
            })
            .catch(err => {
              console.error(err);
            });
        }}
      >
        Delete Friend
      </button>
    </>
  ) : (
    <NoFriend />
  );
}

export default connect(
  null,
  { deleteFriend }
)(FriendDetailPage);
