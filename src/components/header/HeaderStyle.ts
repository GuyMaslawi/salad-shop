import styled from "styled-components";
import { mobile } from "../../helpers/screen-sizes";

export const Div = styled.header`
  padding: 3rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 0.3rem 2rem -0.2rem #ccc;

  @media ${mobile} {
    padding: 1rem;
  }
`;

export const MainTitle = styled.h1`
  color: #000;
`;
