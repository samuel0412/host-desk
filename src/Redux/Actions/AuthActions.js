import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGOUT,
  UPDATE_AUTH_STATE,
  SET_AGENT_CONFIG,
} from "../actionTypes";

const doLogin = (data) => {
  return async (dispatch, getState) => {
    // dispatch(loadingStatus(true));
  };
};
const LogOut = () => {
  return async (dispatch, getState) => {
    dispatch(loadingStatus(true));
    dispatch({
      type: LOGOUT,
    });
    localStorage.removeItem("root");
    localStorage.clear();
    dispatch(loadingStatus(false));
  };
};

const loadingStatus = (loading) => {
  return {
    type: LOGIN_LOADING,
    data: { loading },
  };
};
export { loadingStatus, LogOut, doLogin };
