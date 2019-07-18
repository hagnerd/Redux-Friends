import React from "react";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";
import Friends from "../components/friends";

function FriendsPage(props) {
  return <Friends {...props} />;
}

const mapStateToProps = state => {
  return {
    isFetchingFriends: state.isFetchingFriends,
    friends: state.friends
  };
};

const mapDispatchToProps = {
  fetchFriends
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPage);
