import * as actions from "./userConstants";

export const setCurrentUser = (user) => ({
  type: actions.SET_CURRENT_USER,
  payload: user,
});
