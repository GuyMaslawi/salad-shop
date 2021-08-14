import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        '& label': {
            fontSize: '1.4rem',
        },

        '& .MuiOutlinedInput-root': {
            borderRadius: '1.2rem',
            fontSize: '1.4rem',
        }
    },
});