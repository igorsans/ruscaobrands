import styled from "styled-components";

const AboutMeStyle = styled.div`
  margin: 65px 10%;
  display: flex;
  align-items: center;
  color: white;
  & .textAboutMe {
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
  
`;
export default AboutMeStyle;
