import styled from "styled-components";

const StyledProjects = styled.div`
  margin-top: 140px;
  background-color: var(--color5);
  color: var(--color1);
  font-family: var(--titulo);
  .intro {
    margin: 10px 10% 0px 10%;
    padding: 100px 0px;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: 70px;
  }
  h2 {
    padding-top: 15px;
    width: 40%;
    color: var(--color2);
    font-family: var(--light);
  }
  .cases {
    margin: 10px 10%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  .casesImg {
    width: 471px;
    height: 317px;
  }
  .caseText {
    font-size: 25px;
    font-family: var(--light);
    margin: 20px 0px;
  }
  .btn {
    margin: 0 10%;
    padding: 20px 0px;
    display: flex;
    flex-direction: row-reverse;
  }
  @media (max-width: 1024px) {
    .casesImg {
      width: 390px;
      height: 257px;
    }
  }
  @media (max-width: 768px) {
    .casesImg {
      width: 290px;
      height: 207px;
    }
  }
  @media (max-width: 425px) {
    .intro {
      flex-direction: column;
      padding: 40px 0px;
    }
    h2 {
      width: 100%;
    }
    .casesImg {
      width: 340px;
      height: 217px;
    }
    .btn{
      justify-content: center;
    }
  }
`;
export default StyledProjects;
