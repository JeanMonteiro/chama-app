import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./ducks";
import { HistoryState } from "./ducks/history";
import { UserState } from "./ducks/users";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composer = composeWithDevTools(applyMiddleware(...middlewares));

export interface ApplicationState {
  users: UserState;
  history: HistoryState;
}

const store: Store<ApplicationState> = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
