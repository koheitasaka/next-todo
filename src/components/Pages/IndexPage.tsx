import * as React from 'react';
import { connect } from 'react-redux';
import { IStore, ThunkDispatch } from '@/modules/store';
import AppTemplate from '@/components/Templates/AppTemplate';
import Form from '@/components/Organisms/Form';
import List from '@/components/Organisms/List';

const mapStateToProps = (store: IStore) => ({
  todoList: store.todoList,
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({});

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const IndexPage: React.FC<IProps> = ({ todoList }) => {
  React.useEffect(() => console.log('first render'), []);
  return (
    <AppTemplate>
      <Form />
      <List />
    </AppTemplate>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
