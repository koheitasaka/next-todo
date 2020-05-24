import { todoListOperations } from '@/modules/todoList';
import { ITodo } from '@/modules/types';
import { ThunkAction } from '@/modules/store';
import { firestore } from '@/libs/firebase';
import { actions } from './actions';

export const setInputText = (input: string) =>
  actions.setInputText({ inputText: input });

export const createTodo = (
  callback: () => void,
): ThunkAction<Promise<void>> => async (dispatch, getState) => {
  dispatch(actions.requestCreate());
  const inputText = getState().todo.inputText;
  try {
    const todoDocRef = firestore.collection('todos').doc();
    const todo: ITodo = {
      title: inputText,
      isDone: false,
    };
    await todoDocRef.set(todo);
    dispatch(actions.successCreate());
    callback();
    dispatch(todoListOperations.addTodo(todo));
  } catch (e) {
    console.log(e);
    dispatch(actions.failureCreate());
  }
};
