import * as React from 'react';
import { IStore } from '@/modules/store';
import { Dispatch } from 'redux';
import styled from '@emotion/styled';
import ListItem from '@/components/Molecules/ListItem';
import { connect } from 'react-redux';

const mapStateToProps = (store: IStore) => ({
  todos: store.todoList.todos,
});

const mapDispatchToProps = (dispath: Dispatch) => {
  // ...bindActionCreators(
  //   {
  //     ...todoOperations,
  //   },
  //   dispatch,
  // ),
};

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Container = styled.div({
  padding: '8px 16px',
  display: 'flex',
  flexWrap: 'wrap',
});

const List: React.FC<IProps> = ({ todos }) => {
  return (
    <Container>
      {todos.map(todo => (
        <ListItem todo={todo} />
      ))}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
