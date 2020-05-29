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

export interface ISubmit extends Action {
  type: ActionTypes.SUBMIT;
}

export const submit = () => ({
  type: ActionTypes.SUBMIT,
});

export const actions = {
  setInputText,
  submit,
};

export type IActions = ISetInputText | ISubmit;
