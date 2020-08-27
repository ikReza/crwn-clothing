import * as actions from "./cartConstants";

export const addItem = (item) => async (dispatch) => {
  dispatch({
    type: actions.ADD_ITEM,
    payload: item,
  });
};
