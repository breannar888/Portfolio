import "./scss/app.css";
import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Layout from "./components/Layout";
import NavBar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isOpen, setisOpen] = useState(true);

  const showMobileMenu = () => {
    setisOpen(!isOpen);
  };
  const handleClose = () => {
    setisOpen(false);
  }

  return (
    <div className="app">
      <Layout>
        <NavBar showMobileMenu={showMobileMenu} isOpen={isOpen} handleClose={handleClose}/>
        <div className={isOpen ? "app-test" : ""}>
          <HomePage />
          <SkillsPage />
          <ProjectsPage />
          <ContactPage />
        </div>
      </Layout>
    </div>
  );
}

export default App;
