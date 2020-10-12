import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { AboutMe } from './features/aboutme/aboutme';
import { LandingPage } from './features/landing/landing';
import {ProjectStrip} from './features/projectstrip/projectstrip';
import {MoreAbout} from './features/additional-about/moreabout';
import { Skills } from './features/additional-about/skills';
import {WorkExp} from './features/workexp/workexp';
import { Footer } from './features/footer/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './App.css';

const App = () => {
  return (
    <div className="App">
        <LandingPage />
        <AboutMe />
        {/* <MoreAbout /> */}
        <Skills />
        <WorkExp />
        Scroll down to check out some of my projects! <br></br>
      <FontAwesomeIcon icon={faChevronDown} />
      <ProjectStrip />

        <Footer />
    </div>
  );
}

export default App;
