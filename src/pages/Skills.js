import "../scss/skills.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faSass,
  faAws,
  faReact,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import VSCode from "../images/vscode.png";
import Redux from "../images/redux.png";
import Button from "@mui/material/Button";
import { saveAs } from "file-saver";
import { styled } from "@mui/material/styles";

function SkillsPage() {
  const saveFile = () => {
    saveAs("Breanna Ransom Resume.pdf", "Breanna Ransom Resume.pdf");
  };

  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const loadUp = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };

  const ResumeBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "#D47B59",
    fontFamily: ['"Salsa", cursive'],
    textTransform: "capitalize",
    textDecoration: "none",
    color: "black",
    borderRadius: 0,
    fontSize: 16,
    padding: 10,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  }));

  return (
    <div className="skills-wrap" id="skills">
      <motion.div
        className="skills-inner-wrap"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div variants={loadUp} className="skills-container">
          <motion.div variants={loadUp} className="skills-title">
            Skills and Tools
          </motion.div>
          <motion.div variants={container} className="icon-wrapper">
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faJs} size="4x" />
              <span>JavaScript</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faReact} size="4x" />
              <span>React</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faHtml5} size="4x" />
              <span>HTML5</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faCss3Alt} size="4x" />
              <span>CSS3</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faSass} size="4x" />
              <span>SASS</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faGithub} size="4x" />
              <span>Github</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faAws} size="4x" />
              <span>AWS</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <img src={VSCode} alt={"VSCode"} />
              <span>VSCode</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <img src={Redux} alt={"Redux"} />
              <span>Redux</span>
            </motion.div>
            <motion.div variants={loadUp} className="icon-card">
              <FontAwesomeIcon icon={faGears} size="4x" />
              <span>RESTful APIs</span>
            </motion.div>
          </motion.div>
          <div className="resume-btn">
            <ResumeBtn variant="contained" onClick={saveFile}>
              View Resume
            </ResumeBtn>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SkillsPage;
