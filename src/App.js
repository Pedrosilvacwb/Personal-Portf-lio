import React from 'react';
import AboutMe from './Components/About Me';
import Contact from './Components/Contact';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';

const App = () => {
  return (
    <div className="AppBody">
      <Header />
      <HeroSection />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
