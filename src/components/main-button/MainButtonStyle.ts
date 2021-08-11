import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
    root: {
        background: ,
        borderRadius: '3rem',
        border: 0,
        color: '#fff',
        height: '4.8rem',
        padding: '0 30px',
        fontSize: '1.8rem',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',

        '@media (max-width: 959px)': {
            fontSize: '1.4rem'
        }
    }
});