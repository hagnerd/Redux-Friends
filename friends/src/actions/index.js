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

///////////////////////////////////////////////////////////////////////////////
//  ACTION CREATORS
export const fetchFriends = () => async dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });

  // We use axiosAuth so that we don't need to manually read the token form
  // localStorage
  return axiosAuth
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

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", { username, password })
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token } });
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
