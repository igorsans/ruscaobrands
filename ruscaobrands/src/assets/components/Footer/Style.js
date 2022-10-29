import styled from "styled-components";

const SFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .FMain {
    display: flex;
    width: 90%;
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
  }
`;
export default SFooter;
