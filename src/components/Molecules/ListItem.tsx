import * as React from 'react';
import styled from '@emotion/styled';
import { Card, CardActions, CardContent, Checkbox } from '@material-ui/core';
import { ITodo } from '@/modules/types';

interface IProps {
  todo: ITodo;
}

const Container = styled.div({
  margin: '8px',
  padding: '8px',
  width: '300px',
});

const Title = styled.h3({
  marginTop: '0',
  marginBottom: '8px',
  fontWeight: 'bold',
  wordWrap: 'break-word',
});

const ListItem: React.FC<IProps> = ({ todo }) => {
  return (
    <Container>
      <Card>
        <CardActions>
          <Checkbox />
        </CardActions>
        <CardContent>
          <Title>{todo.title}</Title>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ListItem;
