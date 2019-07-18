import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";
import Friend from "../components/friend";

class FriendDetailPage extends React.Component {
  static propTypes = {
    friend: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired
    }),
    fetchFriends: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (!this.props.areFriendsLoaded) {
      this.props.fetchFriends();
    }
  }

  render() {
    const { friend } = this.props;
    const { areFriendsLoaded } = this.props;

    return areFriendsLoaded ? <Friend {...friend} /> : <p>Loading friend...</p>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const areFriendsLoaded = state.friends.length > 0;

  const friend = state.friends.find(friend => friend.id === Number(id));

  return {
    friend,
    areFriendsLoaded,
    isFetchingFriends: state.isFetchingFriends,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = {
  fetchFriends
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendDetailPage);
