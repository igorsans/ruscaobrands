import styled from "styled-components";

const IntroDiv = styled.div`
  margin: 0px 10%;
  & h3 {
    color: #808286;
    font-size: 26px;
    width: 338px;
    height: 30px;
    margin-bottom: 24px;
    margin-top: 653px;
  }
  & h1 {
    color: white;
    width: 929px;
    height: 135px;
    font-size: 62px;
    text-align: left;
    margin-bottom: 112px;
  }
  & p {
    font-family: var(--font2);
    color: #636569;
    width: 820.03px;
    height: 117.73px;
    font-size: 30px;
    text-align: left;
  }
  & .introImg{
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    margin-top: 150px;
    width: 856.27px;
    height: 603.83px;
    margin-right: 10%;
    background-image: url("/Grupo17.png");
    background-repeat: no-repeat;
  }
`;
export default IntroDiv;
