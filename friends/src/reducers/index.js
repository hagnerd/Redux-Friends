import { LOADING, ERROR, REQUEST_SUCCESS, LOGIN_SUCCESS } from "../actions";

const initialState = {
  friends: [],
  isLoading: false,
  errorMessage: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      };
    }
    case REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        friends: action.payload
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        erroMessage: null
      };
    }
    default:
      return state;
  }
}
