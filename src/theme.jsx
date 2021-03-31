import { createMuiTheme } from '@material-ui/core/styles';

const colorPrimaryMain = '#45d0d0';
const colorSecondaryMain = '#95fdfd';
const DefaultThemeOptions = {
    palette: {
        primary: {
            main: colorPrimaryMain,
            dark: '#36a6a6',
        },
        secondary: {
            main: colorSecondaryMain,
        },
        error:{
            main: '#e04b44',
        },
        warning: {
            main: '#FF3D3D'
        }
    },
    components: {
      MuiButton: {
          styleOverrides: {
              root:{
                  minWidth: 0
              }
          }
      }
    }
};

export const DefaultTheme = createMuiTheme(DefaultThemeOptions);