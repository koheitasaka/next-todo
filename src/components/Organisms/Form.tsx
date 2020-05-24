import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { IStore, ThunkDispatch } from '@/modules/store';
import { todoOperations } from '@/modules/todo';
import styled from '@emotion/styled';
import { Button, Modal } from '@material-ui/core';
import FormModal from '@/components/Molecules/FormModal';

const mapStateToProps = (store: IStore) => ({
  todo: store.todo,
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  // ...bindActionCreators(
  //   {
  //     ...todoOperations,
  //   },
  //   dispatch,
  // ),
  setInputText: (input: string) => dispatch(todoOperations.setInputText(input)),
  createTodo: (callback: () => void) =>
    dispatch(todoOperations.createTodo(callback)),
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

const Form: React.FC<IProps> = ({ todo, setInputText, createTodo }) => {
  const [isFormOpen, setFormOpen] = React.useState<boolean>(false);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const onSubmit = () => {
    createTodo(() => handleFormClose());
  };

  return (
    <Container>
      <Button variant="contained" color="secondary" onClick={handleFormOpen}>
        New
      </Button>
      <Modal open={isFormOpen} onClose={handleFormClose}>
        <React.Fragment>
          <FormModal
            inputText={todo.inputText}
            onChangeInput={setInputText}
            onSubmit={onSubmit}
            isSubmitting={todo.isCreating}
          />
        </React.Fragment>
      </Modal>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
