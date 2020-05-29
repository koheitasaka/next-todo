import { IActions } from './actions';
import { ActionTypes } from './types';
import { IState } from '.';

const initialState: IState = {
  todos: [],
};

export const reducer = (state: IState = initialState, action: IActions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    default:
      break;
  }
};
