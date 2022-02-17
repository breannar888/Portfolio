import "../scss/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faSass,
  faAws,
  faReact,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import Redux from "../images/redux.png";
import Tooltip from "@mui/material/Tooltip";
import crabpic from "../images/CrabNCreole.png";
import covidtracker from "../images/COVID19Tracker.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import WavyUnderline from "../iconComponents/wavyUnderline";
import { motion } from "framer-motion";

function ProjectsPage() {
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
    <motion.div
      className="project-wrap"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className="title" variants={loadUp}>
        Projects
      </motion.div>
      <motion.div className="project-underline" variants={loadUp}>
        <WavyUnderline />
      </motion.div>
      <motion.div className="project-box">
        <motion.div className="project-container" variants={loadUp}>
          <motion.div className="img-box">
            <a
              href="https://www.somewebstuff.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={crabpic} alt={"Crab N' Creole"} />
            </a>
          </motion.div>
          <motion.div className="proj-content">
            <motion.div className="proj-title">
              <a
                href="https://www.somewebstuff.com/"
                target="_blank"
                rel="noreferrer"
              >
                Crab N' Creole
              </a>
            </motion.div>
            <motion.div className="proj-type">Project Type</motion.div>
            <motion.div className="icon-wrap">
              <Tooltip title="React" placement="top">
                <span>
                  <FontAwesomeIcon icon={faReact} />
                </span>
              </Tooltip>
              <Tooltip title="Sass" placement="top">
                <span>
                  <FontAwesomeIcon icon={faSass} />
                </span>
              </Tooltip>
              <Tooltip title="HTML5" placement="top">
                <span>
                  <FontAwesomeIcon icon={faHtml5} />
                </span>
              </Tooltip>
              <Tooltip title="AWS" placement="top">
                <span>
                  <FontAwesomeIcon icon={faAws} />
                </span>
              </Tooltip>
              <Tooltip title="Redux" placement="top">
                <span>
                  <img src={Redux} alt="Redux"/>
                </span>
              </Tooltip>
            </motion.div>
            <motion.div className="proj-description">
              Vestibulum ultricies id purus ac semper. Donec at nisl ex. Nulla
              quis sem laoreet nibh volutpat faucibus eu sit amet turpis. Morbi
              a libero pretium, facilisis elit sit amet, tincidunt ligula. Duis
              hendrerit aliquet est. Quisque aliquam maximus nibh, ut rhoncus
              enim vestibulum congue. Vivamus hendrerit ex neque, eu tincidunt
              sem sodales vel.
            </motion.div>
            <motion.div className="proj-links">
              <Tooltip title="Github" placement="bottom">
                <span>
                  <a
                    href="https://github.com/breannar888/Crab-N-Creole-Restaurant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>
              </Tooltip>
              <Tooltip title="External Link" placement="bottom">
                <span>
                  <a
                    href="https://www.somewebstuff.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </span>
              </Tooltip>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="project-container" variants={loadUp}>
          <motion.div className="img-box">
            <a
              href="https://breannar888.github.io/Covid-tracker/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={covidtracker} alt={"Crab N' Creole"} />
            </a>
          </motion.div>
          <motion.div className="proj-content">
            <motion.div className="proj-title">
              <a
                href="https://breannar888.github.io/Covid-tracker/"
                target="_blank"
                rel="noreferrer"
              >
                COVID-19 Tracker
              </a>
            </motion.div>
            <motion.div className="proj-type">Project Type</motion.div>
            <motion.div className="icon-wrap">
              <Tooltip title="React" placement="top">
                <span>
                  <FontAwesomeIcon icon={faReact} />
                </span>
              </Tooltip>
              <Tooltip title="Sass" placement="top">
                <span>
                  <FontAwesomeIcon icon={faSass} />
                </span>
              </Tooltip>
              <Tooltip title="JavaScript" placement="top">
                <span>
                  <FontAwesomeIcon icon={faJs} />
                </span>
              </Tooltip>
              <Tooltip title="Github" placement="top">
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </Tooltip>
            </motion.div>
            <motion.div className="proj-description">
              Vestibulum ultricies id purus ac semper. Donec at nisl ex. Nulla
              quis sem laoreet nibh volutpat faucibus eu sit amet turpis. Morbi
              a libero pretium, facilisis elit sit amet, tincidunt ligula. Duis
              hendrerit aliquet est. Quisque aliquam maximus nibh, ut rhoncus
              enim vestibulum congue. Vivamus hendrerit ex neque, eu tincidunt
              sem sodales vel.
            </motion.div>
            <motion.div className="proj-links">
              <Tooltip title="Github" placement="bottom">
                <span>
                  <a
                    href="https://github.com/breannar888/Covid-tracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>
              </Tooltip>
              <Tooltip title="External Link" placement="bottom">
                <span>
                  <a
                    href="https://breannar888.github.io/Covid-tracker/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </span>
              </Tooltip>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectsPage;
