import { createTheme, StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#82b74b',
        },
        secondary: {
            main: '#3e4444',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: '#82b74b',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#556B2F',
                },
            },
        },
        MuiTextField: {
            root: {
                '& .MuiInputBase-input': {
                    fontSize: '1.6rem'
                },
            },
        },
    },
});

interface AppContainerProps {
    children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};

export default AppContainer;