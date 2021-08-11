import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import { mobile } from "../../utils/screen-sizes";

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: '8rem',
        display: 'flex',
        justifyContent: 'center',

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

    span{
        &:first-child {
            @media ${mobile} {
                display: none;
            }
        }
    }
`;