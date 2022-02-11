import "../scss/home.css";
import WavyUnderline from "../iconComponents/wavyUnderline";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

function HomePage() {
  const title = "Hello! I'm \nBreanna Ransom";

  const ProjectsBtn = styled(Button)({
    backgroundColor: "#C0D7B6",
    fontFamily: ['"Lora", serif'],
    textTransform: "capitalize",
    color: "black",
    "&:hover": {
      backgroundColor: "#98ab90",
      color: "white",
    },
  });

  return (
    <div className="about-wrapper">
      <div className="about-title-container">
        <div className="about-me-title">{title}</div>
        <div className="about-underline">
          <WavyUnderline />
        </div>
      </div>
      <p className="about-me-text">
        I'm a <span>Frontend Web Developer</span> that develops websites and
        web-based software. I specialize in React, CSS/SASS, and JavaScript, but
        I am always looking for new technologies to help me and my skills grow!
      </p>
      <div className="about-btn">
        <NavLink to="/projects">
          <ProjectsBtn variant="contained">View Projects</ProjectsBtn>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
