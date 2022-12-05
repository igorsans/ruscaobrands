import styled from "styled-components";

const SFooter = styled.footer`
  background-color: ${props => props.color};
  color: ${props => props.color};
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .logo{
    width: 326;
    height: 40px;
  }
  & .FMain {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 54px;
    & .FNav,
    .FContact {
      display: flex;
      gap: 23px;
      justify-content: space-around;
      & a{
        color: black;
      }
    }
  }
  & .FMainB {
    width: 100%;
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
    color: ${props=> props.colorEnd};
    margin-bottom: 49px;
    & span{
      color: var(--color4);
    }
  }
  @media (max-width: 1024px){
    .FMain, .FMainB{
      flex-direction: column-reverse;
      align-items: center;
      gap: 15px;
    }
  }
`;
export default SFooter;
