import styled from "styled-components";
import { mobile } from "../../../helpers/screen-sizes";

export const OneRow = styled.div`
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
      width: 60rem;
      min-height: 100%;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      @media ${mobile} {
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
      }
`;

export const Title = styled.h2`
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 3rem;

    .MuiSvgIcon-root{
        margin-left: 1rem;
        font-size: 3rem;
        position: relative;
        top: .5rem;
    }
`;

export const Details = styled.div`
    margin: 2rem 0;
    font-size: 1.6rem;
    text-align: left;

    h4{
        font-size: 1.8rem;
    }
`;

export const SubTitle = styled.h3`
    font-size: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: .1rem dashed #ccc;
`;

export const ConfirmButtonWrap = styled.div`
    display: flex;
    justify-content: center;

    @media ${mobile} {
        margin-top: 3rem;
    }
`;

export const FinalPrice = styled.div`
    margin-top: 2rem;
    padding-top: .5rem;
    border-top: 1px solid #ccc;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

