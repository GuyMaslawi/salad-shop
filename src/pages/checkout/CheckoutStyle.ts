import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { mobile } from "../../helpers/screen-sizes";
import background from '../../assets/backgrounds/salad2.jpg';
import { SubTitle } from "../../components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 8.7rem);
    position: relative;
    z-index: 0;

    @media ${mobile} {
        min-height: calc(100vh - 4.7rem);
    }
`;

export const Background = styled.div`
    background: url(${background}) no-repeat center center fixed; 
    background-size: cover;
    filter: brightness(0.30);
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const SubTitleStyle = styled(SubTitle)`
    color: #fff;
    position: relative;
    z-index: 1;
`;

export const useStyles = makeStyles({
    root: {
        padding: '2rem',
        borderRadius: '1.2rem',
        width: '100rem',
        maxWidth: '90vw',
        position: 'relative',
        zIndex: 1
    }
});