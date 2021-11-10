export const USERCREATE = "USER/CREATE";
export const USERDELETE = "USER/DELETE";

export const createUser = userData => ({
  type: USERCREATE,
  userData,
});

export const deleteUser = id => ({
  type: USERDELETE,
  id
});
