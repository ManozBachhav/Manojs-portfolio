import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.scss";
import Live2DCharacter from "./components/Live2DModel/Live2DModel";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Projects,
  Skills,
    Experience,
} from "./components";

const App = () => {
  //aos initialization
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Live2DCharacter />
    </>
  );
};

export default App;
