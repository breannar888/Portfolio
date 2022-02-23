import { HashLink as Link } from "react-router-hash-link";
import "../scss/navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isOpen, setisOpen] = useState(true);

  const showMobileMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <div className="nav-wrap">
        <button className="mobile-btn" onKeyPress={showMobileMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} onClick={showMobileMenu} />
        </button>
        <div className={isOpen ? "nav-menu" : "mobile-nav-menu"}>
          <motion.ul>
            <motion.li>
              <Link smooth to="/#home" className="a-link">
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
      </div>
    </>
  );
}

export default NavBar;
