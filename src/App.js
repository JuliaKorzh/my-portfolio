import "./styles/style.css";
import "./styles/reset.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";



import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectOne from "./pages/ProjectOne";


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <ScrollToTop/>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/project/:id" element={<ProjectOne/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            <Footer/>

        </Router>
      </div>
    </div>
  );
}

export default App;
