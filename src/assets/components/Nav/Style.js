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
    cursor: pointer;
  }
  & a:hover {
    & button {
      text-decoration: underline var(--color2) 2px;
    }
  }
  & .active {
    text-decoration: underline var(--color2) 3px;
    border-bottom: 3px solid (--color2);
    & button{
      color: var(--color4);
    }
  }
  & div {
    display: flex;
    gap: 10px;
  }
  & button {
    cursor: pointer;
    background: none;
    color: var(--color3);
    font-size: 20px;
    font-family: var(--light);
  }
  & button:hover{
    color: var(--color4);
  }
  & .ativo{
    color: var(--color4);
  }
  & .langs{
    display: flex;
    align-items: center;
  }
`;
export default NavBar;
