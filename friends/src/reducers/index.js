import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  friends: [],
  loggingIn: false,
  errorMessage: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        errorMessage: null
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loggingIn: false,
        errorMessage: action.payload
      };
    }

    default:
      return state;
  }
}
