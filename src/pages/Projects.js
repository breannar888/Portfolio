import "../scss/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faSass,
  faAws,
  faReact,
  faCss3Alt,
  faWix,
  faFigma,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import Tooltip from "@mui/material/Tooltip";
import crabpic from "../images/CrabNCreole.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectsPage() {
  return (
    <div className="project-wrap">
      <h1>Projects</h1>
      <div>
        <div className="project-container">
          <div className="img-box">
            <img src={crabpic} alt={"Crab N' Creole"} />
          </div>
          <div className="proj-content">
            <div className="proj-title">Crab N' Creole</div>
            <div className="proj-type">Project Type</div>
            <div className="icon-wrap">
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
              <Tooltip title="JavaScript" placement="top">
                <span>
                  <FontAwesomeIcon icon={faJs} />
                </span>
              </Tooltip>
              <Tooltip title="AWS" placement="top">
                <span>
                  <FontAwesomeIcon icon={faAws} />
                </span>
              </Tooltip>
            </div>
            <div className="proj-description">hihihihihihihi</div>
            <div className="proj-links">
              <Tooltip title="Github" placement="bottom">
                <span>
                  <a
                    href="https://github.com/breannar888/Crab-N-Creole-Restaurant"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>
              </Tooltip>
              <Tooltip title="External Link" placement="bottom">
                <span>
                  <a href="https://www.somewebstuff.com/" target="_blank">
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="img-box">
            <img src={crabpic} alt={"Crab N' Creole"} />
          </div>
          <div className="proj-content">
            <div className="proj-title">COVID-19 Tracker</div>
            <div className="proj-type">Project Type</div>
            <div className="icon-wrap">
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
            </div>
            <div className="proj-description">hihihihihihihi</div>
            <div className="proj-links">
              <Tooltip title="Github" placement="bottom">
                <span>
                  <a
                    href="https://github.com/breannar888/Crab-N-Creole-Restaurant"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>
              </Tooltip>
              <Tooltip title="External Link" placement="bottom">
                <span>
                  <a href="https://www.somewebstuff.com/" target="_blank">
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="img-box">
            <img src={crabpic} alt={"Crab N' Creole"} />
          </div>
          <div className="proj-content">
            <div className="proj-title">Crab N' Creole</div>
            <div className="proj-type">Project Type</div>
            <div className="icon-wrap">
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
              <Tooltip title="CSS" placement="top">
                <span>
                  <FontAwesomeIcon icon={faHtml5} />
                </span>
              </Tooltip>
            </div>
            <div className="proj-description">hihihihihihihi</div>
            <div className="proj-links">
              <Tooltip title="Github" placement="bottom">
                <span>
                  <a
                    href="https://github.com/breannar888/Crab-N-Creole-Restaurant"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>
              </Tooltip>
              <Tooltip title="External Link" placement="bottom">
                <span>
                  <a href="https://www.somewebstuff.com/" target="_blank">
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
