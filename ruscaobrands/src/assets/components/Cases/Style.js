import { Link } from "react-router-dom";
import styled from "styled-components";

const CasesStyle = styled.div`
  color: white;
  margin: 0px 10%;
  display: flex;
  flex-direction: column;
  & h2 {
    font-family: var(--titulo);
    font-size: 38px;
    color: var(--color3);
    margin: 25px 0px;
  }
  & .cases {
    margin: 27px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
    & .casesImg {
      height: 317px;
      width: 470px;
      cursor: pointer;
    }
  & .seeAll {
    font-family: var(--light);
    text-transform: uppercase;
    color: var(--color3);
    align-self: center;
    width: 256px;
    height: 75px;
    background-color: rgba(0, 0, 0, 0%);
    border-radius: 9.29px;
    border-style: outset;
    border: 1px solid var(--color3);
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;
    font-size: 26px;
  }
`;
export default CasesStyle;
