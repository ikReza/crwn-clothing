import * as actions from "./shopConstants";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_COLLECTION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actions.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case actions.FETCH_COLLECTION_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
