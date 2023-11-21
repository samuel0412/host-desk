import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import loggerMiddleware from "./Middleware/logger";
import rootReducer from "./Reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet,
  whitelist: ["Auth"], // only Auth will be persisted
};

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, undefined, middlewareEnhancer);

const store = createStore(persistedReducer, undefined, middlewareEnhancer);
const persistor = persistStore(store);

export { store, persistor };
