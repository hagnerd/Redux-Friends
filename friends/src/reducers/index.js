import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  SAVE_FRIENDS_START,
  SAVE_FRIENDS_SUCCESS,
  SAVE_FRIENDS_FAILURE,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  loggingIn: false,
  errorMessage: null,
  isFetchingFriends: false,
  isSavingFriends: false,
  isUpdatingFriend: false
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

    case FETCH_FRIENDS_START: {
      return {
        ...state,
        isFetchingFriends: true
      };
    }
    case FETCH_FRIENDS_SUCCESS: {
      return {
        ...state,
        isFetchingFriends: false,
        errorMessage: null,
        friends: action.payload
      };
    }

    case FETCH_FRIENDS_FAILURE: {
      return {
        ...state,
        isFetchingFriends: false,
        errorMessage: "An error occured while fetching your friends"
      };
    }
    case SAVE_FRIENDS_START: {
      return {
        ...state,
        isSavingFriends: true
      };
    }
    case SAVE_FRIENDS_SUCCESS: {
      return {
        ...state,
        isSavingFriends: false,
        friends: action.payload,
        errorMessage: null
      };
    }
    case SAVE_FRIENDS_FAILURE: {
      return {
        ...state,
        isSavingFriends: false,
        errorMessage: action.payload
      };
    }

    case UPDATE_FRIEND_START: {
      return {
        ...state,
        isUpdatingFriend: true
      };
    }
    case UPDATE_FRIEND_SUCCESS: {
      return {
        ...state,
        isUpdatingFriend: false,
        friends: action.payload,
        errorMessage: null
      };
    }
    case UPDATE_FRIEND_FAILURE: {
      return {
        ...state,
        isUpdatingFriend: false,
        errorMessage: action.payload
      };
    }
    default:
      return state;
  }
}
