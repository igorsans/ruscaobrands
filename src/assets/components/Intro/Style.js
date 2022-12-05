import styled from "styled-components";

const IntroDiv = styled.div`
  margin: 0px 10%;
  & h3 {
    font-family: var(--light);
    color: var(--color2);
    font-size: 26px;
    width: 338px;
    height: 30px;
    margin-bottom: 24px;
    margin-top: 653px;
  }
  & h1 {
    font-family: var(--titulo);
    color: var(--color3);
    width: 929px;
    height: 135px;
    font-size: 62px;
    text-align: left;
    margin-bottom: 112px;
  }
  & p {
    font-family: var(--corrido);
    color: #636569;
    width: 820.03px;
    height: 117.73px;
    font-size: 30px;
    text-align: left;
  }
  & .introImg {
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
  @media (max-width: 1024px) {
    & h1 {
      width: 100%;
    }
    & p {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    & .introImg {
      margin-right: 0%;
      width: 800px;
      background-size: contain;
    }
  }
  @media (max-width: 425px) {
    & .introImg {
      width: 425px;
      height: 400px;
    }
    & h3 {
      margin-top: 500px;
    }
    & h1{
      font-size: 50px;
      height: 190px;
    }
    & p{
      margin-bottom: 100px;
    }
  }
`;
export default IntroDiv;
