import styled from "styled-components";
import { mobile } from "../../utils/screen-sizes";

export const Text = styled.div`
    font-size: 5rem;
    color: #fff;
    text-align: center;

    @media ${mobile} {
        font-size: 3rem;
    }
`;