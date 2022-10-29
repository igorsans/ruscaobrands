import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 50%;
  font-size: 20px;
  font-family: var(--light);
  color: var(--color5);
  & a {
    color: var(--color5);
    text-decoration: none;
  }
  & div {
    display: flex;
    gap: 10px;
  }
`;
export default NavBar;
