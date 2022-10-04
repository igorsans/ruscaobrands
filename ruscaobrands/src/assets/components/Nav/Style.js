import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 50%;
  font-size: 20px;
  color: white;
  & a {
    color: white;
    text-decoration: none;
  }
  & div {
    display: flex;
    gap: 10px;
  }
`;
export default NavBar;
