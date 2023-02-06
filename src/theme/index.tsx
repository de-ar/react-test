import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiOutlinedInput: {
      defaultProps: {

      },
      styleOverrides: {
        root: {
          borderRadius: 30,
        }
      }
    },
    MuiAvatar: {
      defaultProps: {

      },
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          border: '5px solid grey'
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {

      },
      styleOverrides: {
        root: {
          borderRadius: 50,
          // backgroundColor: 'red',
          // border: '5px solid grey'
        }
      }
    }
  },
});

type ThemeProviderProps = {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}