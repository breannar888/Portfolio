import { NavLink } from "react-router-dom";
import "../scss/navbar.css";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";

function NavBar() {
  // variable to apply active styling for nav links
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav">
      <motion.ul>
        <motion.li>
          <NavLink to="/" className={`a-link ${isActive ? "active" : ""}`}>
            About
          </NavLink>
        </motion.li>
        <motion.li>
          <NavLink to="/skills" className="a-link">
            Skills
          </NavLink>
        </motion.li>
        <motion.li>
          <NavLink to="/projects" className="a-link">
            Projects
          </NavLink>
        </motion.li>
        <motion.li>
          <NavLink to="/contact" className="a-link">
            Contact
          </NavLink>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default NavBar;
