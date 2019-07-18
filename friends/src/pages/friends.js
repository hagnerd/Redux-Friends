import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";
import Friends from "../components/friends";
import FriendDetail from "../pages/friend-detail";
import FriendsContainer from "../containers/friends-container";

function FriendsPage(props) {
  return (
    <FriendsContainer {...props}>
      {friendsProps => (
        <Switch>
          <Route
            path={`${props.match.path}/:id`}
            render={routeProps => (
              <FriendDetail
                {...routeProps}
                {...friendsProps}
                friend={friendsProps.friends.find(
                  friend => Number(routeProps.match.params.id) === friend.id
                )}
              />
            )}
          />
          <Route
            path={`${props.match.path}`}
            render={routeProps => <Friends {...routeProps} {...friendsProps} />}
          />
        </Switch>
      )}
    </FriendsContainer>
  );
}

const mapStateToProps = state => {
  return {
    isFetchingFriends: state.isFetchingFriends,
    friends: state.friends,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = {
  fetchFriends
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPage);
