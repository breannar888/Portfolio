import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "./scss/app.css";
import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/skills" element={<SkillsPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
