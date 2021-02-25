export const ActionTypes = {
  PUSH_TO_STORAGE: "PUSH_TO_STORAGE",
  SET_SEARCHS: "SET_SEARCHS",
  GET_SEARCHS: "GET_SEARCHS",
  SET_LOADING_SEARCHS: "SET_LOADING_SEARCHS",
};

export type HistoryState = {
  searchs: string[];
  loadingSearchs: boolean;
};

const DEFAULT_STATE: HistoryState = {
  searchs: [],
  loadingSearchs: false,
};

export default function reducer(state = DEFAULT_STATE, action: any) {
  switch (action.type) {
    case ActionTypes.SET_SEARCHS:
      return {
        ...state,
        searchs: action.payload,
      };
    case ActionTypes.SET_LOADING_SEARCHS:
      return {
        ...state,
        loadingSearchs: action.payload,
      };
    default:
      return state;
  }
}

export function pushToStorage(userName: string) {
  return {
    type: ActionTypes.PUSH_TO_STORAGE,
    payload: userName,
  };
}

export function setSearchs(userNames: string[]) {
  return {
    type: ActionTypes.SET_SEARCHS,
    payload: userNames,
  };
}

export function setLoadingSearchs(loading: boolean) {
  return {
    type: ActionTypes.SET_LOADING_SEARCHS,
    payload: loading,
  };
}

export function getSearchs() {
  return {
    type: ActionTypes.GET_SEARCHS,
  };
}
