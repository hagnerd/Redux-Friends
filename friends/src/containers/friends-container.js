import React from "react";

// We want to avoid repeatedly fetching the friends from the server and making
// the user wait. The render prop API lends nicely to having a state/effect-ful 
// component wrap a sub-route ('/friends') with some common state.
export default class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return this.props.children({
      friends: this.props.friends,
      isFetchingFriends: this.props.isFetchingFriends,
      errorMessage: this.props.errorMessage
    });
  }
}
