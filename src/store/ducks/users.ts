import User from "src/shared/types/User";

export const ActionTypes = {
  REQUEST_GET_USERS: "REQUEST_GET_USERS",
  SET_USERS: "REQUEST_GET_USERS",
};

export type UsersState = {
  users: User[];
};

const DEFAULT_STATE: UsersState = {
  users: [],
};

export default function reducer(state = DEFAULT_STATE, action: any) {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}

export function requestGetUsers(userName: string) {
  return {
    type: ActionTypes.REQUEST_GET_USERS,
    payload: userName,
  };
}
