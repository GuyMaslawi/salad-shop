import styled from "styled-components";
import { mobile } from "../../../helpers/screen-sizes";

export const Wrapper = styled.div`
    height: 50rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media ${mobile} {
        height: auto;
        width: 100%;
        padding: 2.5rem 2.5rem 0;
    }

    form {
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 2.2rem;
    margin-bottom: 2rem;
`;