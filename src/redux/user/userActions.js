import * as actions from "./userConstants";

export const googleSignInStart = () => ({
  type: actions.GOOGLE_SIGNIN_START,
});

export const signInSuccess = (user) => ({
  type: actions.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: actions.SIGNIN_FAIL,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: actions.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: actions.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: actions.SIGNOUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: actions.SIGNOUT_SUCCESS,
});

export const signOutFail = (error) => ({
  type: actions.SIGNOUT_FAIL,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: actions.SIGNUP_REQUEST,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: actions.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFail = (error) => ({
  type: actions.SIGNUP_FAIL,
  payload: error,
});
