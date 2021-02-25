import { call, put, takeLeading } from "redux-saga/effects";
import { ActionTypes, setLoadingSearchs, setSearchs } from "../ducks/history";
import { toast } from "react-toastify";

function* workerPushToStorage(action: any) {
  yield put(setLoadingSearchs(true));
  const searchs = localStorage.getItem("searchs") || "[]";
  const objectSearchs: [] = JSON.parse(searchs);
  try {
    localStorage.setItem(
      "searchs",
      JSON.stringify([...objectSearchs, action.payload])
    );
  } catch (error) {
    yield call(toast, "Erro ao salvar histórico", { type: "error" });
  } finally {
    yield put(setLoadingSearchs(false));
  }
}

function* workerGetSearchs(action: any) {
  yield put(setLoadingSearchs(true));
  try {
    const searchs = localStorage.getItem("searchs") || "[]";
    const objectSearchs: [] = JSON.parse(searchs);
    yield put(setSearchs(objectSearchs.reverse()));
  } catch (error) {
    yield call(toast, "Erro ao recuperar histórico", { type: "error" });
  } finally {
    yield put(setLoadingSearchs(false));
  }
}

export function* watchPushToStorage() {
  yield takeLeading(ActionTypes.PUSH_TO_STORAGE, workerPushToStorage);
}

export function* watchGetSearchs() {
  yield takeLeading(ActionTypes.GET_SEARCHS, workerGetSearchs);
}

export default [watchPushToStorage, watchGetSearchs];
