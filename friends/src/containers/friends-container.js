import React from "react";

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
