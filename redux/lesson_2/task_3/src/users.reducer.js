import { USERCREATE, USERDELETE } from "./users.actions.js";

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERCREATE:
      return {
        ...state,
        usersList: [...state.usersList, action.userData],
      };
    case USERDELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.id),
      };
    default:
      return state;
  }
};
