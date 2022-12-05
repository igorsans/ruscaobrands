import Logo from "/Logo.png";
import StyledHeader from "./Style.js";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";

const Header = ({ setInHome }) => {
  return (
    <StyledHeader>
      <div className="header">
        <div className="logo">
          <Link
            onClick={(e) => {
              setInHome(true);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/"
          >
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
