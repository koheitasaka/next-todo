import { ITodo } from '../types';
import { ActionTypes } from './types';
import { actions } from './actions';
import * as operations from './operations';
import { reducer } from './reducers';

export interface IState {
  todos: ReadonlyArray<ITodo>;
}

export {
  reducer as todoListReducer,
  actions as todoListActions,
  operations as todoLlistOperations,
  ActionTypes as todoListActionTypes,
};
