import * as actions from "./cartConstants";

export const addItem = (item) => ({
  type: actions.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: actions.CLEAR_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: actions.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: actions.CLEAR_CART,
});
