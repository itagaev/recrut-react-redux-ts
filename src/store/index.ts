import { createStore, applyMiddleware } from "redux";
import { State } from './State';
import { Action } from "./models/action-types";
import { rootReducer } from "./reducer";
import thunk from 'redux-thunk';

export const store = createStore<State, Action, {}, {}> (
    rootReducer,
    applyMiddleware(thunk)
) 