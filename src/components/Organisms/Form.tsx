import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from '@/modules/store';
import { todoOperations } from '@/modules/todo';
import { todoListOperations } from '@/modules/todoList';
import { ITodo } from '@/modules/types';
import styled from '@emotion/styled';
import { Button, Modal } from '@material-ui/core';
import FormModal from '@/components/Molecules/FormModal';

const mapStateToProps = (store: IStore) => ({
  todo: store.todo,
});

const mapDispatchToProps = (dispatch: any) => ({
  // ...bindActionCreators(
  //   {
  //     ...todoOperations,
  //   },
  //   dispatch,
  // ),
  setInputText: (input: string) => dispatch(todoOperations.setInputText(input)),
  onSubmit: (input: string) => {
    dispatch(todoOperations.submitTodo());
    const todo: ITodo = {
      text: input,
    };
    dispatch(todoListOperations.addTodo(todo));
  },
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

const Form: React.FC<IProps> = ({ todo, setInputText, onSubmit }) => {
  const [isFormOpen, setFormOpen] = React.useState<boolean>(false);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <Container>
      <Button variant="contained" color="secondary" onClick={handleFormOpen}>
        New
      </Button>
      <Modal open={isFormOpen} onClose={handleFormClose}>
        <FormModal
          inputText={todo.inputText}
          onChangeInput={setInputText}
          onSubmit={onSubmit}
        />
      </Modal>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
