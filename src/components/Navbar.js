import { NavLink } from "react-router-dom";
import "../scss/navbar.css";

function NavBar() {
  // variable to apply active styling for nav links
  const navStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none",
    textDecorationColor: isActive ? "#734a44" : "none",
  });

  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" style={navStyle}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" style={navStyle}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
