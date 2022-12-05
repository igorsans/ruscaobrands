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
  @media (max-width: 1440px) {
    .togetherIntro {
      & h2 {
        font-size: 80px;
      }
    }
  }
  @media (max-width: 1024px) {
    .togetherIntro {
      & h2 {
        font-size: 60px;
      }
      & h3 {
        font-size: 25px;
        width: 50%;
      }
    }
  }
  @media (max-width: 768px) {
    margin: 100px 10%;
    .togetherIntro {
      & h2 {
        font-size: 45px;
      }
      & h3 {
        font-size: 20px;
      }
    }
    .moreInfo{
      flex-direction: column;
      & div {
      width: 100%;
    }
    }
  }
  @media (max-width: 425px) {
    .togetherIntro {
      flex-direction: column;
      & h2 {
        font-size: 60px;
      }
      & h3 {
        font-size: 25px;
        width: 100%;
      }
    }
  }
`;
export default WorkStyle;
