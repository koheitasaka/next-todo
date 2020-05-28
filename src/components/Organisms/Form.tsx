import * as React from 'react';
import styled from '@emotion/styled';
import { Button, Modal } from '@material-ui/core';
import FormModal from '../Molecules/FormModal';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
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
        <FormModal />
      </Modal>
    </Container>
  );
};

export default Form;
