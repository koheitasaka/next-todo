import * as React from 'react';
import styled from '@emotion/styled';
import { Button, Modal, TextField } from '@material-ui/core';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

const ModalContainer = styled.div({
  width: '40%',
  minWidth: '400px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  backgroundColor: '#fafafa',
  padding: '16px 24px',
  margin: '80px auto',
});

const ActionContainer = styled.div({
  margin: '20px',
  textAlign: 'right',
});

const Form: React.FC = () => {
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
        <ModalContainer>
          <TextField
            label="todo"
            placeholder="todo"
            helperText="write something to do"
            fullWidth
            margin="normal"
          />
          <ActionContainer>
            <Button variant="contained" color="secondary">
              submit
            </Button>
          </ActionContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Form;
