import React from "react";
import PropTypes from "prop-types";

import FriendsList from "./friends-list";

export default class Friends extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  static propTypes = {
    fetchFriends: PropTypes.func.isRequired,
    isFetchingFriends: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const { friends, isFetchingFriends, errorMessage } = this.props;

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
}
