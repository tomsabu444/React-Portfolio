import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Certificate from './pages/Certificate'
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Maintenance from './components/Maintenance';
function App() {
  return (
    <>

      <div className="dev-mod">

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/certificate" element={<Certificate />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>

      </div>

        <Maintenance/> 


    </>
  )
}

export default App