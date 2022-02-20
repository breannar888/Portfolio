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
  faWix,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import WebflowSVG from "../iconComponents/webflowsvg";
import VSCode from "../images/vscode.png";
import Redux from "../images/redux.png";


function SkillsPage() {
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

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
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
            <FontAwesomeIcon icon={faWix} size="4x" />
            <span>Wix</span>
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <WebflowSVG />
            <span>Webflow</span>
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <img src={VSCode} alt={"VSCode"}/>
            <span>VSCode</span>
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <img src={Redux} alt={"Redux"}/>
            <span>Redux</span>
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faGears} size="4x" />
            <span>RESTful APIs</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SkillsPage;
