import React from "react";
import { Switch, Route } from "react-router-dom";
import Friends from "../components/friends";
import FriendDetail from "../pages/friend-detail";
import FriendForm from "../components/friend-form";
import FriendsContainer from "../containers/friends-container";

function FriendsPage({ match }) {
  return (
    <FriendsContainer>
      {({ friends, saveFriends, updateFriend }) => (
        <Switch>
          <Route
            path={`${match.path}/new`}
            render={props => <FriendForm {...props} onSubmit={saveFriends} />}
          />
          <Route
            path={`${match.path}/:id/edit`}
            render={routeProps => (
              <FriendForm
                {...routeProps}
                {...friends.find(
                  friend => friend.id === Number(routeProps.match.params.id)
                )}
                submitText="Update Friend"
                onSubmit={body =>
                  updateFriend(routeProps.match.params.id, body)
                }
              />
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
