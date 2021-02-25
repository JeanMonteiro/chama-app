import { combineReducers } from "redux";
import users from "../ducks/users";
import history from "../ducks/history";

export const rootReducer = combineReducers({ users, history });
