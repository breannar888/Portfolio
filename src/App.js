import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/app.css";
import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app">
      <Layout>
        <Header />
        <HomePage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </Layout>
    </div>
  );
}

export default App;
