import { all, call, spawn } from "redux-saga/effects";
import users from "./users";

const sagas: any = [...users];

export function* rootSaga() {
  yield all([
    ...sagas.map((saga: any) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
          }
        }
      })
    ),
  ]);
}
