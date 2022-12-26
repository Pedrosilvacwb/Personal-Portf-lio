import React from 'react';
import AboutMe from './Components/About Me';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Technologies from './Components/Technologies';

const App = () => {
  return (
    <div className="AppBody">
      <Header />
      <HeroSection />
      <AboutMe />
      <Technologies />
    </div>
  );
};

export default App;
