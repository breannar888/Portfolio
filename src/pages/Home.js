import "../scss/home.css";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { HashLink as Link } from "react-router-hash-link";

function HomePage() {
  const title = "Hello! I'm \nBreanna Ransom";

  const ProjectsBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "#5A3D39",
    fontFamily: ['"Salsa", cursive'],
    textTransform: "capitalize",
    textDecoration: "none",
    color: "white",
    fontSize: 16,
    padding: 10,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "black",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  }));

  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  const loadUp = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="about-container"
      id="home"
    >
      <div className="about-wrap">
        <motion.div variants={loadUp} className="about-title-container">
          <motion.div variants={loadUp} className="about-me-title">
            {title}
          </motion.div>
        </motion.div>
        <motion.p variants={loadUp} className="about-me-text">
          I'm a <span>Frontend Web Developer</span> that designs and develops
          websites and web-based software. blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah websites and web-based software.
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
        </motion.p>
        <motion.div variants={loadUp} className="about-btn">
          <Link smooth to="/#projects">
            <ProjectsBtn variant="contained">View Projects</ProjectsBtn>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomePage;
