import * as React from 'react';
import styled from '@emotion/styled';
import AppTemplate from '@/components/Templates/AppTemplate';
import Form from '@/components/Organisms/Form';
import List from '@/components/Organisms/List';

const IndexPage: React.FC = () => {
  return (
    <AppTemplate>
      <Form />
      <List />
    </AppTemplate>
  );
};

export default IndexPage;
