import styled from "styled-components";

const AboutMeStyle = styled.div`
  margin: 65px 10%;
  display: flex;
  align-items: center;
  color: white;
  & .textAboutMe {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
  }
  & h3 {
    font-family: var(--light);
    font-size: 20px;
    color: var(--color4);
  }
  & h2 {
    font-family: var(--titulo);
    color: var(--color3);
    font-size: 54px;
    width: 475px;
    height: 429px;
  }
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    .textAboutMe {
      gap: 40px;
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    & h2 {
    font-size: 40px;
    height: 270px;
  }
  }
  @media (max-width: 425px) {
    & h2 {
    width: 395px;
    font-size: 30px;
    height: 170px;
  }
  }
`;
export default AboutMeStyle;
