import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_AUTH_STATE,
} from "../actionTypes";

const INITIAL_STATE = {
  token: null,
  loading: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: action.data,
      };

    case UPDATE_AUTH_STATE:
      return {
        ...state,
        ...action.data,
      };

    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default AuthReducer;
