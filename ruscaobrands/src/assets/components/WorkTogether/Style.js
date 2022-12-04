import styled from "styled-components";

const WorkStyle = styled.div`
  display: flex;
  margin: 161px 10%;
  flex-direction: column;
  & .togetherIntro {
    display: flex;
    color: var(--color3);
    & h2 {
      font-family: var(--titulo);
      font-size: 100px;
      width: 50%;
    }
    & h3 {
      font-family: var(--corrido);
      margin-top: 30px;
      width: 40%;
      font-size: 30px;
    }
  }
  & .moreInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & div {
      width: 90%;
    }
  }
`;
export default WorkStyle;
