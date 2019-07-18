import React from "react";
import { Switch, Route } from "react-router-dom";
import Friends from "../components/friends";
import FriendDetail from "../pages/friend-detail";
import FriendForm from "../components/friend-form";
import FriendsContainer from "../containers/friends-container";

function FriendsPage({ match }) {
  return (
    <FriendsContainer>
      {({ friends, saveFriends }) => (
        <Switch>
          <Route
            path={`${match.path}/new`}
            component={props => (
              <FriendForm {...props} onSubmit={saveFriends} />
            )}
          />
          <Route
            path={`${match.path}/:id`}
            render={routeProps => (
              <FriendDetail
                {...routeProps}
                friend={friends.find(
                  friend => Number(routeProps.match.params.id) === friend.id
                )}
              />
            )}
          />
          <Route
            path={`${match.path}`}
            render={routeProps => <Friends {...routeProps} friends={friends} />}
          />
        </Switch>
      )}
    </FriendsContainer>
  );
}

export default FriendsPage;
