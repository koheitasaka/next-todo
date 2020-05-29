import * as React from 'react';
import styled from '@emotion/styled';
import { Button, Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IStore } from '@/modules/store';
import { todOperations } from '@/modules/todo';
import FormModal from '../Molecules/FormModal';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

const mapStateToProps = (state: IStore) => ({
  // ...bindActionCreators(
  //   {
  //     ...todoOperations,
  //   },
  //   dispatch,
  // ),
  todo: state.todo,
});

const mapDispatchToProps = (dispatch: any) => ({
  setInputText: (input: string) => dispatch(todOperations.setInputText(input)),
});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Form: React.FC<IProps> = ({ todo, setInputText }) => {
  const [isFormOpen, setFormOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };
  return (
    <Container>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        new
      </Button>
      <Modal open={isFormOpen} onClose={handleFormClose}>
        <FormModal inputText={todo.inputText} onChangeInput={setInputText} />
      </Modal>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
