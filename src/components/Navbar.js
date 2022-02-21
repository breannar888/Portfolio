import { HashLink as Link } from "react-router-hash-link";
import "../scss/navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";

function NavBar() {
  // variable to apply active styling for nav links
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav">
      <motion.ul>
        <motion.li>
          <Link smooth to="/#home" className={`a-link ${isActive ? "active" : ""}`}>
            About
          </Link>
        </motion.li>
        <motion.li>
          <Link smooth to="/#skills" className="a-link">
            Skills
          </Link>
        </motion.li>
        <motion.li>
          <Link smooth to="#projects" className="a-link">
            Projects
          </Link>
        </motion.li>
        <motion.li>
          <Link smooth to="/#contact" className="a-link">
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default NavBar;
