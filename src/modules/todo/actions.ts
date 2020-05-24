import { Action } from 'redux';
import { ActionTypes } from './types';

export interface ISetInputText extends Action {
  type: ActionTypes.SET_INPUT_TEXT;
  payload: {
    inputText: string;
  };
}

export const setInputText = (
  payload: ISetInputText['payload'],
): ISetInputText => ({
  type: ActionTypes.SET_INPUT_TEXT,
  payload,
});

export interface IRequestCreate extends Action {
  type: ActionTypes.REQUEST_CREATE;
}

export const requestCreate = (): IRequestCreate => ({
  type: ActionTypes.REQUEST_CREATE,
});

export interface ISuccessCreate extends Action {
  type: ActionTypes.SUCCESS_CREATE;
}

export const successCreate = (): ISuccessCreate => ({
  type: ActionTypes.SUCCESS_CREATE,
});
export interface IFailureCreate extends Action {
  type: ActionTypes.FAILURE_CREATE;
}

export const failureCreate = (): IFailureCreate => ({
  type: ActionTypes.FAILURE_CREATE,
});

export const actions = {
  setInputText,
  requestCreate,
  successCreate,
  failureCreate,
};

export type IActions =
  | ISetInputText
  | IRequestCreate
  | ISuccessCreate
  | IFailureCreate;
