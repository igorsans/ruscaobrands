import styled from "styled-components";

const CaseComponent = styled.div`
  background-color: var(--color5);
  margin-top: 122px;
  color: var(--color1);
  font-family: var(--light);
  .introText {
    display: flex;
    justify-content: space-between;
    padding: 103px 10%;
    padding-bottom: 125px;
    align-items: flex-start;
  }
  h1 {
    font-family: var(--titulo);
    font-size: 70px;
  }
  h2 {
    padding-top: 15px;
    width: 40%;
    color: var(--color4);
  }
  hr {
    margin: 0 10%;
  }
  h3 {
    color: var(--color4);
    margin: 40px 15%;
  }
  .conteudo {
    margin: 35px 10% -1px 10%;
    & img {
      width: 100%;
      margin: 43px 0px;
    }
  }
  .btn{
    margin: 0px 10%;
    display: flex;
    justify-content: flex-end;
  }
`;

export default CaseComponent;
