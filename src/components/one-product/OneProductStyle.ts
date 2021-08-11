import styled from "styled-components";
import { makeStyles, TextField } from "@material-ui/core";

export const Wrapper = styled.div`
    border: .1rem solid #ccc;
    padding: 2rem;
    border-radius: .8rem;
    height: 23rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
`;

export const Img = styled.img`
    width: 8rem;
`;

export const Details = styled.div`
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`;

export const Name = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const Price = styled.div`
    font-size: 1.6rem;
`;

export const Input = styled(TextField)`
    width: 4rem;
    height: 4rem;
    margin: 0 1rem;
`;

export const useStyles = makeStyles({
    root: {
        height: '4rem',
        minWidth: '4rem',
        fontSize: '1.9rem',
        borderRadius: '50%',
        backgroundColor: '#ccc'
    }
});

export const inputStyles = makeStyles({
    root: {
        margin: '0 1rem',
        width: '4rem',
        height: '4rem',

        '& .MuiInputBase-input': {
            fontSize: '2rem',
            textAlign: 'center'
        },
    }
});