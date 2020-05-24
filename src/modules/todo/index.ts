import { ActionTypes } from './types';
import { actions } from './actions';
import * as operations from './operations';
import reducer from './reducers';

export interface IState {
  inputText: string;
  isCreating: boolean;
}

export {
  reducer as todoReducer,
  actions as todoActions,
  operations as todoOperations,
  ActionTypes as todoActionTypes,
};
