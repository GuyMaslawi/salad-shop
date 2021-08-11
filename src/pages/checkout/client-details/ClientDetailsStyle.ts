import styled from "styled-components";
import { mobile } from "../../../utils/screen-sizes";

export const Wrapper = styled.div`
    height: 50rem;
    width: 30rem;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    @media ${mobile} {
        min-height: auto;
    }

    form {
        width: 100%;
    }
`;