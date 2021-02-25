import { all, call, spawn } from "redux-saga/effects";
import users from "./users";
import history from "./history";
import { toast } from "react-toastify";

const sagas: any = [...users, ...history];

export function* rootSaga() {
  yield all([
    ...sagas.map((saga: any) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            yield call(toast, "Erro inesperado!", { type: "error" });
          }
        }
      })
    ),
  ]);
}
