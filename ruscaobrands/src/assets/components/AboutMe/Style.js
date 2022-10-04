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
    & button{
    margin: 17px 0px;
    width: 296px;
    height: 63px;
  }
  }
  & h3 {
    font-size: 20px;
    color: #636569;
  }
  & h2 {
    font-size: 54px;
    width: 475px;
    height: 429px;
  }
  
`;
export default AboutMeStyle;
