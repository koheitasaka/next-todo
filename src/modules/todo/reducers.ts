import { IActions } from './actions';
import { ActionTypes } from './types';
import { IState } from '.';

const initialState: IState = {
  inputText: '',
};

export const reducer = (state: IState = initialState, action: IActions) => {
  switch (action.type) {
    case ActionTypes.SET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload.inputText,
      };
    default:
      break;
  }
};
