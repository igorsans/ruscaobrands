import styled from "styled-components";

const SFooter = styled.footer`
  background-color: ${bgcolor? 'black' : 'white'};
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .FMain {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 54px;
    & .FNav,
    .FContact {
      display: flex;
      gap: 23px;
      justify-content: space-around;
    }
  }
  & .FMainB {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 54px;
    & .FNav,
    .FContact {
      display: flex;
      gap: 23px;
      justify-content: space-around;
    }
  }
  & .FEnd {
    margin-bottom: 49px;
    background-color: black;
  }
`;
export default SFooter;
