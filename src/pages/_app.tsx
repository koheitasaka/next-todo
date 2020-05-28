import * as React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { store } from '@/modules/store';
import { theme } from '@/config/ui';

export default class ToDoApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StylesProvider injectFirst>
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
