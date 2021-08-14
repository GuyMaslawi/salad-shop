import { useMediaQuery, useTheme } from '@material-ui/core';

export function useSmallScreen() {
   const theme = useTheme();
   return useMediaQuery(theme.breakpoints.down('xs'));
};