import Logo from "/Logo.png";
import Teste from "./Style.js";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";

const Header = ({ setcaseState }) => {
  return (
    <Teste>
      <div className="header">
        <div className="logo">
          <Link onClick={(e) => setcaseState(false)} to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <Nav />
      </div>
    </Teste>
  );
};

export default Header;
