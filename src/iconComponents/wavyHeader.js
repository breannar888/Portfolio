import React from "react";
import NavBar from "../components/Navbar";
import "../scss/header.css";

function WavyHeader() {
  return (
    <div>
      <NavBar/>
      <svg
        className="header"
        width="100%"
        height="100%"
        viewBox="0 0 1512 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1511.77 71.2544C1529.55 110.957 531.341 35.4861 0 92V-50H1511.77V71.2544Z"
          fill="#D47B59"
          stroke="#D47B59"
          stroke-width="3"
        />
      </svg>
    </div>
  );
}
export default WavyHeader;
