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
  faFigma
} from "@fortawesome/free-brands-svg-icons";
import WebflowSVG from "../iconComponents/webflowsvg";
import WavyUnderline from "../iconComponents/wavyUnderline";

function SkillsPage() {
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
    >
      <motion.div variants={loadUp} className="skills-container">
        <motion.div variants={loadUp} className="skills-title">
          Skills and Tools
        </motion.div>
        <motion.div variants={loadUp} className="skills-underline">
          <WavyUnderline />
        </motion.div>
        <motion.div variants={container} className="icon-wrapper">
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faGithub} size="4x" />
            Github
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faHtml5} size="4x" />
            HTML5
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faSass} size="4x" />
            SASS
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faAws} size="4x" />
            AWS
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faReact} size="4x" />
            React
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faCss3Alt} size="4x" />
            CSS3
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faWix} size="4x" />
            Wix
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <WebflowSVG/>
            Webflow
          </motion.div>
          <motion.div variants={loadUp} className="icon-card">
            <FontAwesomeIcon icon={faFigma} size="4x" />
            Figma
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SkillsPage;
