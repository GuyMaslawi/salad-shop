import styled from "styled-components";
import { mobile } from "../../utils/screen-sizes";

export const Title = styled.h2`
    font-size: 6rem;
    text-align: center;
    margin-bottom: 3rem;

    @media ${mobile} {
        font-size: 2.7rem;
    }
`;