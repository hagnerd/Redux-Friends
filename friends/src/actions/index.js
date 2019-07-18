import axios from "axios";
import axiosAuth from "../axiosAuth";

///////////////////////////////////////////////////////////////////////////////
//  ACTIONS

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SAVE_FRIENDS_START = "SAVE_FRIENDS_START";
export const SAVE_FRIENDS_SUCCESS = "SAVE_FRIENDS_SUCCESS";
export const SAVE_FRIENDS_FAILURE = "SAVE_FRIENDS_FAILURE";

export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAILURE = "UPDATE_FRIEND_FAILURE";

export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

///////////////////////////////////////////////////////////////////////////////
//  ACTION CREATORS
export const fetchFriends = () => async dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });

  // We use axiosAuth so that we don't need to manually read the token form
  // localStorage
  return axiosAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FRIENDS_FAILURE });
    });
};

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", { username, password })
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.payload } });
    })
    .catch(err => {
      const payload = err.response && err.response.data.error;
      console.log(err.response);

      dispatch({ type: LOGIN_FAILURE, payload });
      return `ERROR - STATUS: ${err.response.status} ${
        err.response.statusText
      } - MESSAGE: ${payload}`;
    });
};

export const saveFriends = body => async dispatch => {
  dispatch({ type: SAVE_FRIENDS_START });

  return axiosAuth()
    .post("http://localhost:5000/api/friends", body)
    .then(res => {
      dispatch({ type: SAVE_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      const payload = err.response && err.response.data.error;

      dispatch({ type: SAVE_FRIENDS_FAILURE, payload });

      return `ERROR - STATUS: ${err.response.status} ${
        err.response.statusText
      } - MESSAGE ${payload}`;
    });
};

export const updateFriend = (id, body) => async dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });

  return axiosAuth()
    .put(`http://localhost:5000/api/friends/${id}`, body)
    .then(res => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      const payload = err.response && err.response.data;

      dispatch({ type: UPDATE_FRIEND_FAILURE, payload });
      return `ERROR - STATUS ${err.response.status} ${
        err.response.statusText
      } - MESSAGE ${payload}`;
    });
};

export const deleteFriend = id => async dispatch => {
  dispatch({ type: DELETE_FRIEND_START });

  return axiosAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: err.response.data });
      return `ERROR - STATUS ${err.response.status} ${
        err.response.statusText
      } - MESSAGE ${err.response.data}`;
    });
};
