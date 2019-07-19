import React from "react";
import { connect } from "react-redux";
import { fetchFriends, saveFriends, updateFriend } from "../actions";

// We want to avoid repeatedly fetching the friends from the server and making
// the user wait. The render prop API lends nicely to having a state/effect-ful
// component wrap a sub-route ('/friends') with some common state.
class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return this.props.children({
      friends: this.props.friends,
      saveFriends: this.props.saveFriends,
      updateFriend: this.props.updateFriend
    });
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = {
  fetchFriends,
  saveFriends,
  updateFriend
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsContainer);
