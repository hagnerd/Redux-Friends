import React from "react";
import { connect } from "react-redux";

import FriendsList from "./friends-list";

function Friends(props) {
  const { friends, isFetchingFriends, errorMessage } = props;

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

const mapStateToProps = state => ({
  isFetchingFriends: state.isFetchingFriends,
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps)(Friends);
