import { ActionTypes } from './types';
import { IActions } from './actions';
import { IState } from './index';

const initialState: IState = {
  inputText: '',
};

const reducer = (state: IState = initialState, action: IActions) => {
  switch (action.type) {
    case ActionTypes.SET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload.inputText,
      };
    default:
      return state;
  }
};

export default reducer;
