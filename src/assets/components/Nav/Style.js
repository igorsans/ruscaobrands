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
  & .active {
    text-decoration: underline var(--color2) 3px;
    border-bottom: 3px solid (--color2);
    & button {
      color: var(--color3);
      text-decoration: underline 2px;
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
    font-size: 23px;
    font-family: var(--light);
  }
  & button:hover {
    color: var(--color4);
  }
  & .ativo {
    color: var(--color4);
  }
  & .langs {
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    button {
      font-size: 27px;
    }
  }
  @media (max-width: 425px) {
    button {
      font-size: 15px;
    }
  }
`;
export default NavBar;
