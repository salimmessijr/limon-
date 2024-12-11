import classNames from "classnames";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import "./nav-mobile.scss";

const NavMobile = ({ namespace }) => {
  return (
    <nav className={classNames(`${namespace}--mobile`)}>
      <HamburgerMenu>
        <NavigationLinks />
      </HamburgerMenu>
    </nav>
  );
};

export default NavMobile;
