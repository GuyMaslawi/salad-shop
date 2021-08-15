import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        '& label': {
            fontSize: '1.4rem',
        },

        '& .MuiOutlinedInput-root': {
            borderRadius: '1.2rem',
            fontSize: '1.4rem',
        },

        '& .MuiFormHelperText-contained': {
            fontSize: '1.4rem',
            fontWeight: 'bold',
            color: 'red'
        }
    },
});