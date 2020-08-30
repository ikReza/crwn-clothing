import * as actions from "./cartConstants";

export const addItem = (item) => async (dispatch) => {
  dispatch({
    type: actions.ADD_ITEM,
    payload: item,
  });
};

export const clearItem = (item) => async (dispatch) => {
  dispatch({
    type: actions.CLEAR_ITEM,
    payload: item,
  });
};

export const removeItem = (item) => async (dispatch) => {
  dispatch({
    type: actions.REMOVE_ITEM,
    payload: item,
  });
};
