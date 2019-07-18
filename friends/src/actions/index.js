import axios from "axios";

///////////////////////////////////////////////////////////////////////////////
//  ACTIONS

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

///////////////////////////////////////////////////////////////////////////////
//  ACTION CREATORS
export const fetchFriends = () => async dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });

  return axios
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FRIENDS_FAILURE });
    });
};
