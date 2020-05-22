/** @jsx jsx */
import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@material-ui/core';
import { css, jsx } from '@emotion/core';
import { theme } from '@/config/ui';

const appBarStyle = css({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const toolBarStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
});

const Content = styled.div({
  display: 'flex',
});

const AppBarTitle = styled.h2({
  fontWeight: 'bold',
  cursor: 'pointer',
});

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" css={appBarStyle}>
      <Toolbar css={toolBarStyle}>
        <Content>
          <Link href={'/'}>
            <AppBarTitle>To Do App</AppBarTitle>
          </Link>
        </Content>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
