import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../images/Logo.svg";
import "./nav-desktop.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

const NavDesktop = ({ namespace }) => {
  return (
    <nav>
      <div className={classNames(`${namespace}--desktop`)}>
        <Link to="/">
          <img src={Logo} alt="Little Lemon Logo" />
        </Link>
        <NavigationLinks />
      </div>
    </nav>
  );
};

export default NavDesktop;
