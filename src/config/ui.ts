import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a73e8',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export const sideBarWidth = 200;

export const toastAutoClosingTime = 5000;
