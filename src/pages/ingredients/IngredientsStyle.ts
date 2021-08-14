import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const Wrapper = styled.div`
    width: 100rem;
    max-width: 90vw;
    margin: 2rem auto;
    height: calc(100vh - 9rem);
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: '8rem',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 20,

        '& .MuiGrid-container': {
            maxWidth: '100rem',
            margin: 'auto',
        },

        '@media (max-width: 959px)': {
            padding: '0 2.5rem',
        },
    }
});

export const Price = styled.div`
    font-size: 3rem;
    color: #fff;
`;