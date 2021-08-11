import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#156064',
        },
        secondary: {
            main: '#00C49A',
        },
    },
});

interface AppContainerProps {
    children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default AppContainer;