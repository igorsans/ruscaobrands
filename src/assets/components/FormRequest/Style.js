import styled from "styled-components";

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 639px;
  height: 713px;
  & .twoBoxs {
    display: flex;
    gap: 15px;
    width: 105%;
  }
  & h4 {
    font-family: var(--light);
    font-size: 41px;
  }
  & .input {
    font-family: var(--light);
    font-size: 22px;
    border-radius: 10px;
    height: 60px;
    border: 1px solid #f3f4f4;
    background-color: black;
    padding: 15px;
    color: #636569;
    width: 100%;
  }
  @media (max-width: 1440px) {
    width: 509px;
    & .twoBoxs {
      width: 106%;
    }
  }
  @media (max-width: 1024px) {
    align-items: center;
    margin: auto;
  }
  @media (max-width: 768px) {
  width: 325px;
  text-align: center;
  }
`;
export default SForm;
