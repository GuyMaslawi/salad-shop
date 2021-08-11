import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        '& label': {
            fontSize: '1.4rem',
            transform: 'translate(1.4rem, 1.7rem) scale(1)',
        },

        '& .MuiOutlinedInput-root': {
            borderRadius: '1.2rem',
            fontSize: '1.4rem',
        }
    },
});