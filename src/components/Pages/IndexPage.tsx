import * as React from 'react';
import AppTemplate from '@/components/Templates/AppTemplate';
import Form from '../Organisms/Form';
import List from '../Organisms/List';

const IndexPage: React.FC = () => {
  return (
    <AppTemplate>
      <Form />
      <List />
    </AppTemplate>
  );
};

export default IndexPage;
