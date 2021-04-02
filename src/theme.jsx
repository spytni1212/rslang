import { createMuiTheme } from '@material-ui/core/styles';

const colorPrimaryMain = '#b790a4';
const colorSecondaryMain = '#dcabc4';
const DefaultThemeOptions = {
    palette: {
        primary: {
            main: colorPrimaryMain,
            dark: '#ab6689',
        },
        secondary: {
            main: colorSecondaryMain,
        },
        error: {
            main: '#de726c',
        },
        warning: {
            main: '#f1c684fa'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: 0
                }
            }
        },
    }
};

export const DefaultTheme = createMuiTheme(DefaultThemeOptions);