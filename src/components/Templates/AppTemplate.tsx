import * as React from 'react';
import styled from '@emotion/styled';
import Header from '@/components/Organisms/Header';

interface IProps {
  children: React.ReactNode;
}

const Container = styled.div({
  marginTop: '70px',
  padding: '16px 32px',
});

const AppTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default AppTemplate;
