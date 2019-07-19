import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Friend from "../components/friend";
import { deleteFriend } from "../actions";

function NoFriend() {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-red-400 text-center my-5">
        No friend found with that ID
      </h2>
    </>
  );
}

function FriendDetailPage(props) {
  if (props.isLoading) {
    return (
      <p className="text-3xl font-extrabold text-green-400 text-center my-5">
        Currently fetching friends...
      </p>
    );
  }

  return props.friend ? (
    <div className="flex flex-col w-1/2 mx-auto my-5">
      <div className="bg-white p-5 rounded-lg shadow-md my-10">
        <Friend {...props.friend} />
      </div>
      <div className="w-1/2 mx-auto flex justify-around">
        <Link
          className="rounded bg-green-500 font-semibold p-3 text-white hover:bg-green-700 shadow"
          to={`/friends/${props.friend.id}/edit`}
        >
          Edit Friend
        </Link>
        <button
          className="rounded bg-red-500 font-semibold p-3 text-white hover:bg-red-700 shadow"
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
      </div>
    </div>
  ) : (
    <NoFriend />
  );
}

export default connect(
  null,
  { deleteFriend }
)(FriendDetailPage);
