import { todoListActions } from '@/modules/todoList';
import { ITodo } from '@/modules/types';
import { actions } from './actions';

export const setInputText = (input: string) =>
  actions.setInputText({ inputText: input });

export const submitTodo = () => actions.submit();
