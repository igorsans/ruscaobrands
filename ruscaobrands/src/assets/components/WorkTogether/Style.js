import styled from "styled-components";

const WorkStyle = styled.div`
  display: flex;
  margin: 161px 10%;
  flex-direction: column;
  & .togetherIntro {
    display: flex;
    justify-content: space-between;
    & h2 {
      font-size: 100px;
      width: 692px;
      height: 221px;
    }
    & h3 {
      width: 769px;
      height: 245px;
      font-size: 30px;
    }
  }
`;
export default WorkStyle;
