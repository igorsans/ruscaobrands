import Logo from "/Logo.png";
import StyledHeader from "./Style.js";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";

const Header = ({ setcaseState }) => {
  return (
    <StyledHeader>
      <div className="header">
        <div className="logo">
          <Link onClick={(e) => setcaseState(false)} to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
