import * as actions from "./userConstants";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case actions.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case actions.SIGNIN_FAIL:
    case actions.SIGNOUT_FAIL:
    case actions.SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
