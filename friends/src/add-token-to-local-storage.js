import { LOGIN_SUCCESS } from "./actions";

// When a LOGIN_SUCCESS action is dispatched we want to grab the token that is
// returned by the successful API call and add it to localStorage so that our
// `axioAuth` function, and `PrivateRoute` component can reliably know where to
// check for the token.
const addTokenToLocalStorage = _store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("token", action.payload.token);
  }

  next(action);
};

export default addTokenToLocalStorage;
