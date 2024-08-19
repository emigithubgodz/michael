import "./App.css";
import React, { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";  // Correct import
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { trio } from 'ldrs';

trio.register();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-spinner">
          <l-trio size="70" speed="1.3" color="white"></l-trio>
        </div>
      ) : (
        <>
          <NavBar />
          <Banner />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
