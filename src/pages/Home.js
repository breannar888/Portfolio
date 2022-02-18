import "../scss/home.css";
import { motion } from "framer-motion";
import WavyUnderline from "../iconComponents/wavyUnderline";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";


function HomePage() {
  const title = "Hello! I'm \nBreanna Ransom";

  const ProjectsBtn = styled(Button)({
    backgroundColor: "#C0D7B6",
    fontFamily: ['"Salsa", cursive'],
    textTransform: "capitalize",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      backgroundColor: "#98ab90",
      color: "white",
    },
  });

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
      className="about-wrapper"
    >
      <motion.div variants={loadUp} className="about-title-container">
        <motion.div variants={loadUp} className="about-me-title">
          {title}
        </motion.div>
        <motion.div variants={loadUp} className="about-underline">
          <WavyUnderline />
        </motion.div>
      </motion.div>
      <motion.p variants={loadUp} className="about-me-text">
        I'm a <span>Frontend Web Developer</span> that designs and develops
        websites and web-based software.
      </motion.p>
      <motion.div variants={loadUp} className="about-btn">
        <NavLink to="/projects">
          <ProjectsBtn variant="contained">View Projects</ProjectsBtn>
        </NavLink>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
