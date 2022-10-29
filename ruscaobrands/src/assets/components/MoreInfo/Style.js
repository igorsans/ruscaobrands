import styled from "styled-components";

const InfoStyle = styled.div`
  margin: 30px 0px;
  border-top-style: solid;
  border-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  & h3{
    font-family: var(--titulo);
    font-size: 40px;
  }
  & .infoInt {
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
    cursor: pointer;
  }
  & .textInfoInt {
    display: flex;
    justify-content: flex-end;
    & p {
      color: var(--color4);
      font-family: var(--corrido);
      width: 60%;
      padding: 10px 0px;
    }
  }
  & .InfoPlus{
    color: var(--color4);
  }
`;

export default InfoStyle;
