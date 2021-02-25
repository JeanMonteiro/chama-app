import Repo from "src/types/Repo";
import User from "src/types/User";

export const ActionTypes = {
  REQUEST_GET_USER: "REQUEST_GET_USER",
  REQUEST_GET_REPOS: "REQUEST_GET_REPOS",
  SET_USER: "SET_USER",
  SET_REPOS: "SET_REPOS",
  SET_LOADING_USER: "SET_LOADING_USER",
  SET_LOADING_REPOS: "SET_LOADING_REPOS",
};

export type UserState = {
  user?: User;
  loadingUser: boolean;
  loadingRepos: boolean;
};

const DEFAULT_STATE: UserState = {
  user: undefined,
  loadingRepos: false,
  loadingUser: false,
};

export default function reducer(state = DEFAULT_STATE, action: any) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.SET_LOADING_REPOS:
      return {
        ...state,
        loadingRepos: action.payload,
      };
    case ActionTypes.SET_LOADING_USER:
      return {
        ...state,
        loadingUser: action.payload,
      };
    case ActionTypes.SET_REPOS:
      return {
        ...state,
        user: { ...state.user, repos: action.payload },
      };
    default:
      return state;
  }
}

export function requestGetUsers(userName: string) {
  return {
    type: ActionTypes.REQUEST_GET_USER,
    payload: userName,
  };
}

export function requestGetRepos(userName: string) {
  return {
    type: ActionTypes.REQUEST_GET_REPOS,
    payload: userName,
  };
}

export function setUser(user?: User | null) {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
}
export function setRepos(repos: Repo[]) {
  return {
    type: ActionTypes.SET_REPOS,
    payload: repos,
  };
}

export function setLoadingRepos(loading: boolean) {
  return {
    type: ActionTypes.SET_LOADING_REPOS,
    payload: loading,
  };
}

export function setLoadingUser(loading: boolean) {
  return {
    type: ActionTypes.SET_LOADING_USER,
    payload: loading,
  };
}
