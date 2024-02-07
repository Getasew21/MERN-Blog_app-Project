
import { Action } from './Reducer';

export const loginStart = (userCredentials: any): Action => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user: any): Action => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (): Action => ({
  type: "LOGIN_FAILURE",
});
export const LogOut = (): Action => ({
  type: "LogOut",
});
export const UpdateStart = (userCredentials:any): Action => ({
  type: "UPDATE_START",
});
export const UpdateSuccess = (user: any): Action => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = (): Action => ({
  type: "UPDATE_FAILURE",
});




