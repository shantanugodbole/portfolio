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

  function handleSocialClick(url){
    window.open(url)
  }

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
  else if(content === 'aboutme'){
    rightPanel = <AboutMe/>
  }
  else{
    handleClick('aboutme')
  }
  


    return (
      <div>
        <div className="flex hidden md:flex">
        <div className='flex flex-col justify-between md:w-1/6 md:h-screen w-0 bg-black text-white' id="leftnav">
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
            <img src="twitter.png" alt="logo" className="w-10 h-10" onClick={()=>handleSocialClick('https://twitter.com/shangod12')}></img>
            <img src="linkedin.png" alt="logo" className="w-10 h-10" onClick={()=>handleSocialClick('https://www.linkedin.com/in/shantanugodbole12/')}></img>
            <img src="spotify_logo.png" alt="logo" className="w-10 h-10" onClick={()=>handleSocialClick('https://open.spotify.com/user/27l5r0wvnlapn8j6srcv1dzh2')}></img>
            <img src="gmail.png" alt="logo" className="w-10 h-10" onClick={()=>handleSocialClick('mailto:shantanugodbole2000@gmail.com')}></img>
          </div>
        </div>
        {rightPanel}
      </div>
      <div className="md:hidden">
        <AboutMe/>
        <Academics/>
        <WorkExperience/>
        <Projects/>
        <Interests/>
      </div>
      </div>
      
      
    );
  
}

export default App;
