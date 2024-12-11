import { useState } from "react";
import "./hamburger-menu.scss";
import Menu from "../../utils/Menu";
import Close from "../../utils/Close";

const HamburgerMenu = ({ children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${className}`}>
      <button
        className="hamburger-menu__icon"
        onClick={toggleMenu}
        aria-label={isOpen ? "Menu open" : "Menu close"}
      >
        <Menu />
      </button>
      {isOpen && (
        <div className="hamburger-menu__modal">
          <button
            className="hamburger-menu__close"
            onClick={toggleMenu}
            aria-label={isOpen ? "Modal open" : "Modal close"}
          >
            <Close />
          </button>
          <div className="hamburger-menu__content">{children}</div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
