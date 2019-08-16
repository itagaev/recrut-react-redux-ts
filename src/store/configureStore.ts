import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ThunkMiddleware } from "redux-thunk";
import usersReducer from "../reducers/usersReducer";
import loadingReducer from "../reducers/loadingReducer";
import userReducer from "../reducers/userReducer";
import { AppActions } from "../types/action";

export const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  loading: loadingReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
