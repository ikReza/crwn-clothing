import * as actions from "./userConstants";

export const setCurrentUser = (user) => async (dispatch) => {
  dispatch({
    type: actions.SET_CURRENT_USER,
    payload: user,
  });
};
