import { Action } from 'redux';
import { ITodo } from '../types';
import { ActionTypes } from './types';

export interface IAddTodo extends Action {
  type: ActionTypes.ADD_TODO;
  payload: {
    todo: ITodo;
  };
}

export const addTodo = (payload: IAddTodo['payload']): IAddTodo => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const actions = {
  addTodo,
};

export type IActions = IAddTodo;
