import axios from "axios";
import axiosAuth from "../axiosAuth";

///////////////////////////////////////////////////////////////////////////////
//  ACTIONS

export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

///////////////////////////////////////////////////////////////////////////////
//  ACTION CREATORS

const makeLoggableError = ({ status, statusText, message }) => {
  return `ERROR - STATUS ${status} ${statusText} - MESSAGE ${message}`;
};

export const fetchFriends = () => async dispatch => {
  dispatch({ type: LOADING });

  // We use axiosAuth so that we don't need to manually read the token form
  // localStorage
  return axiosAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.response.data.error });
      return makeLoggableError({
        status: err.response.status,
        statusText: err.response.statusText,
        message: err.response.data.error
      });
    });
};

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOADING });

  return axios
    .post("http://localhost:5000/api/login", { username, password })
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.payload } });
    })
    .catch(err => {
      const payload = err.response && err.response.data.error;

      dispatch({ type: ERROR, payload });

      return makeLoggableError({
        status: err.response.status,
        statusText: err.response.statusText,
        message: payload
      });
    });
};

export const saveFriends = body => async dispatch => {
  dispatch({ type: LOADING });

  return axiosAuth()
    .post("http://localhost:5000/api/friends", body)
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      const payload = err.response && err.response.data.error;

      dispatch({ type: ERROR, payload });

      return makeLoggableError({
        status: err.response.status,
        statusText: err.response.statusText,
        message: payload
      });
    });
};

export const updateFriend = (id, body) => async dispatch => {
  dispatch({ type: LOADING });

  return axiosAuth()
    .put(`http://localhost:5000/api/friends/${id}`, body)
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      const payload = err.response && err.response.data.error;

      dispatch({ type: ERROR, payload });

      return makeLoggableError({
        status: err.response.status,
        statusText: err.response.statusText,
        message: payload
      });
    });
};

export const deleteFriend = id => async dispatch => {
  dispatch({ type: LOADING });

  return axiosAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      const payload = err.response && err.response.data.error;

      dispatch({ type: ERROR, payload });

      return makeLoggableError({
        status: err.response.status,
        statusText: err.response.statusText,
        message: payload
      });
    });
};
