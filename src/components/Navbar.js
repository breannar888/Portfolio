import { HashLink as Link } from "react-router-hash-link";
import "../scss/navbar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function NavBar({showMobileMenu, isOpen, handleClose}) {
  return (
    <>
      <div className="nav-wrap">
        <button className="mobile-btn" onKeyPress={showMobileMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} onClick={showMobileMenu} />
        </button>
        <div className={isOpen ? "nav-menu" : "mobile-nav-menu"}>
          <motion.ul>
            <motion.li onClick={handleClose}>
              <Link smooth to="/#home" className="a-link">
                About
              </Link>
            </motion.li>
            <motion.li onClick={handleClose}>
              <Link smooth to="/#skills" className="a-link">
                Skills
              </Link>
            </motion.li>
            <motion.li onClick={handleClose}>
              <Link smooth to="#projects" className="a-link">
                Projects
              </Link>
            </motion.li>
            <motion.li onClick={handleClose}>
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
