import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { bindActionCreators } from 'redux';
import { IStore } from '@/modules/store';
import { todoOperations } from '@/modules/todo';
import { todoListOperations } from '@/modules/todoList';
import { ITodo } from '@/modules/types';
import styled from '@emotion/styled';
import { Button, Modal } from '@material-ui/core';
import ListItem from '@/components/Molecules/ListItem';

const mapStateToProps = (store: IStore) => ({
  todos: store.todoList.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // ...bindActionCreators(
  //   {
  //     ...todoOperations,
  //   },
  //   dispatch,
  // ),
});

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
