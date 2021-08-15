import styled from "styled-components";
import background from '../../assets/backgrounds/salad.jpg';
import { mobile } from "../../helpers/screen-sizes";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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

export const Content = styled.div`
    position: relative;
    z-index: 1;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
`;



