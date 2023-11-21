// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import { persistCombineReducers } from 'redux-persist'
import AuthReducer from "./AuthReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

export default rootReducer;
