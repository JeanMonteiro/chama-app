import axios from "axios";
import { call, takeLeading } from "redux-saga/effects";
import { ActionTypes } from "../ducks/users";

function* requestGetUsers(action: any) {
  let response;
  try {
    response = yield call(axios.get, `estadoCidade/cidades/${action.payload}`);
    if (response.status === 200) {
    }
  } catch (error) {
    //TODO toast
  }
}

export function* watchRequestGetUsers() {
  yield takeLeading(ActionTypes.REQUEST_GET_USERS, requestGetUsers);
}

export default [watchRequestGetUsers];
