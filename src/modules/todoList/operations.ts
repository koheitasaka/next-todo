import { ITodo } from '@/modules/types';
import { actions } from './actions';

export const addTodo = (todo: ITodo) => actions.addTodo({ todo });
