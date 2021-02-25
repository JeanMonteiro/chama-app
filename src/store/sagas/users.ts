import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, put, takeLeading } from "redux-saga/effects";
import { pushToStorage } from "../ducks/history";
import {
  ActionTypes,
  setLoadingUser,
  setUser,
  setLoadingRepos,
  requestGetRepos,
  setRepos,
} from "../ducks/users";

function* requestGetUsers(action: any) {
  let response: AxiosResponse;
  yield put(setLoadingUser(true));
  try {
    response = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload}`
    );
    if (response.status === 200) {
      yield put(setUser(response.data));
      yield put(requestGetRepos(action.payload));
      yield put(pushToStorage(action.payload));
    }
  } catch (error) {
    if (error && error.status === 403) {
      yield put(setUser(null));
    } else {
      yield call(toast, "Erro ao pesquisar usuários", { type: "error" });
    }
  } finally {
    yield put(setLoadingUser(false));
  }
}

function* workerRequestGetRepos(action: any) {
  let response: AxiosResponse;
  yield put(setLoadingRepos(true));
  try {
    response = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload}/repos`
    );
    if (response.status === 200) {
      yield put(setRepos(response.data));
    }
  } catch (error) {
    yield call(toast, "Erro ao buscar repositórios", { type: "error" });
  } finally {
    yield put(setLoadingRepos(false));
  }
}

export function* watchRequestGetUser() {
  yield takeLeading(ActionTypes.REQUEST_GET_USER, requestGetUsers);
}

export function* watchRequestGetRepos() {
  yield takeLeading(ActionTypes.REQUEST_GET_REPOS, workerRequestGetRepos);
}

export default [watchRequestGetUser, watchRequestGetRepos];
