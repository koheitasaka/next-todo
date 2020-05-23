import { ActionTypes } from './types';
import { IActions } from './actions';
import { IState } from './index';

const initialState: IState = {
  todos: [],
};

const reducer = (state: IState = initialState, action: IActions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    default:
      return state;
  }
};

export default reducer;
