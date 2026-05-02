import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const pages = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const CurrentPage = pages[currentPage];

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <CurrentPage />
    </>
  );
}

export default App;
