import { NavLink } from "react-router-dom";
import "./navigation-links.scss";

const NavigationLinks = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservations"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
