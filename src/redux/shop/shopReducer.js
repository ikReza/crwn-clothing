import * as actions from "./shopConstants";

const INITIAL_STATE = {
  collections: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
