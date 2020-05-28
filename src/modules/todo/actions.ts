import { Action } from 'redux';
import { ActionTypes } from './types';

export interface ISetInputText extends Action {
  type: string;
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

export const actions = {
  setInputText,
};

export type IActions = ISetInputText;
