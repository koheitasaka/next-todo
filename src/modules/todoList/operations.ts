import { ITodo } from '../types';
import { actions } from './actions';

export const addTodo = (todo: ITodo) => actions.addTodo({ todo });
