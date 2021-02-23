import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./ducks";
import { UsersState } from "./ducks/users";

export interface ApplicationStore {
  user: UsersState;
}

const store: Store<ApplicationStore> = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
