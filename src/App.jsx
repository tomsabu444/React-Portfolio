import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Certificate from './pages/Certificate'
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Maintenance from "./components/Maintenance";
import Error404 from "./Error-handling/404-Error";
import Bg_animation from "./components/Bg-animation";

function App() {
  return (
    <>
    
      <div className="dev-mod">
      <Bg_animation/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/resume" element={<Resume />} />
            {/* <Route exact path="/certificate" element={<Certificate />} /> */}
            <Route exact path="/projects" element={<Projects />} />

            {/* Route for 404 Not Found */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </div>

      {/* <Maintenance/>  */}
    </>
  );
}

export default App;
