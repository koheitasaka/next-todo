import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware, {
//   ThunkAction as _ThunkAction,
//   ThunkDispatch as _ThunkDispatch,
// } from 'redux-thunk';
import {
  // Action,
  // AnyAction,
  // applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { IState as ITodoState, todoReducer } from './todo';
import { IState as ITodoListState, todoListReducer } from './todoList';

// export type ThunkAction<R, A extends Action = AnyAction> = _ThunkAction<
//   R,
//   IStore,
//   void,
//   A
// >;

// export type ThunkDispatch<A extends Action = AnyAction> = _ThunkDispatch<
//   IStore,
//   void,
//   A
// >;

export interface IStore {
  todo: ITodoState;
  todoList: ITodoListState;
}

const reducer = combineReducers({
  todo: todoReducer,
  todoList: todoListReducer,
});

const enhancer = composeWithDevTools();

export const store = createStore(reducer, enhancer);
