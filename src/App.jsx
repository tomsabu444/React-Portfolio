import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Resume from "./pages/Resume";
// import Maintenance from "./components/Maintenance";
// import Error404 from "./Error-handling/404-Error";
import Bg_animation from "./components/Bg-animation";

import Loading from "./components/Loading";
import VisitorCount from "./utils/VisitorCount";

// lazy  loading 
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));
const Error404 = lazy(() => import("./Error-handling/404-Error"));



function App() {
  return (
    <>
      <main>
        <Bg_animation />
        <Router>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/projects" element={<Projects />} />

              {/* Route for 404 Not Found */}
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </Router>
      </main>

      {/* Visitor Count */}
        <VisitorCount/>

      {/* <Maintenance/>  */}
    </>
  );
}

export default App;
