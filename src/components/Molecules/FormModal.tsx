import * as React from 'react';
import styled from '@emotion/styled';
import { Button, TextField } from '@material-ui/core';

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

const FormModal: React.FC = () => {
  return (
    <ModalContainer>
      <h1>Create todo</h1>
      <TextField
        label="todo"
        placeholder="todo"
        helperText="write something to do"
        fullWidth
        margin="normal"
      />
      <ActionContainer>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </ActionContainer>
    </ModalContainer>
  );
};

export default FormModal;
