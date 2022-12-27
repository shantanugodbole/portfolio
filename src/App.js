import { useState } from "react";
import React from 'react'
import AboutMe from "./components/content/AboutMe";
import Essays from "./components/content/Essays";
import Academics from "./components/content/Academics";
import WorkExperience from "./components/content/WorkExperience";
import Projects from "./components/content/Projects";
import Interests from "./components/content/Interests";
import NavButton from "./components/NavButton";

function App() {
  // right panel will be dynamic
  var rightPanel = <AboutMe/>
  const [content, setContent] = useState('null');
  function handleClick(msg) {
    setContent(msg)
  }

  // checking state of app to update right panel based on click
  if (content === 'essay') {
    rightPanel = <Essays></Essays>
  }
  else if(content === 'academics'){
    rightPanel = <Academics></Academics>
  }
  else if(content === 'workexperience'){
    rightPanel = <WorkExperience></WorkExperience>
  }
  else if(content === 'projects'){
    rightPanel = <Projects></Projects>
  }
  else if(content === 'skills'){
    rightPanel = <Interests></Interests>
  }
  else{
    rightPanel = <AboutMe/>
  }

  return (
    <div className="flex">
      <div className='flex flex-col justify-between w-1/6 bg-red-100 h-screen bg-black text-white'>
      <div>
      <p className="px-5 py-5 text-3xl font-bold">ShanGod</p>
        <div className="py-2">
        <NavButton onClick={() => handleClick('home')} name="Home" img="home.png"/>
        <NavButton onClick={() => handleClick('academics')} name="Academics" img="academics.png"/>
        <NavButton onClick={() => handleClick('projects')} name="Projects" img="project.png"/>
        <NavButton onClick={() => handleClick('workexperience')} name="Work Experience" img="work.png"/>
        <NavButton onClick={() => handleClick('skills')} name="Skills" img="skills.png"/>
        </div>
      </div>
        <div className="flex justify-around mb-5">
          <img src="twitter.png" alt="logo" className="w-10 h-10"></img>
          <img src="linkedin.png" alt="logo" className="w-10 h-10"></img>
          <img src="spotify_logo.png" alt="logo" className="w-10 h-10"></img>
          <img src="gmail.png" alt="logo" className="w-10 h-10"></img>
        </div>
      </div>
      {rightPanel}
    </div>
  );
}

export default App;
