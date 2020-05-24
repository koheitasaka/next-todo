import { ActionTypes } from './types';
import { IActions } from './actions';
import { IState } from './index';

const initialState: IState = {
  inputText: '',
  isCreating: false,
};

const reducer = (state: IState = initialState, action: IActions) => {
  switch (action.type) {
    case ActionTypes.SET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload.inputText,
      };
    case ActionTypes.REQUEST_CREATE:
      return {
        ...state,
        isCreating: true,
      };
    case ActionTypes.SUCCESS_CREATE:
      return {
        ...state,
        inputText: '',
        isCreating: false,
      };
    case ActionTypes.FAILURE_CREATE:
      return {
        ...state,
        isCreating: false,
      };
    default:
      return state;
  }
};

export default reducer;
