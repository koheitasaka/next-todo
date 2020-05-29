import { actions } from './actions';

export const setInputText = (text: string) =>
  actions.setInputText({ inputText: text });

export const submitTodo = () => actions.submit();
