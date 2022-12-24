import { useState } from "react";
import React from 'react'
import AboutMe from "./components/content/AboutMe";
import Essays from "./components/content/Essays";
import Academics from "./components/content/Academics";
import WorkExperience from "./components/content/WorkExperience";
import Projects from "./components/content/Projects";
import Interests from "./components/content/Interests";

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
  else if(content === 'interests'){
    rightPanel = <Interests></Interests>
  }

  return (
    <div className="flex">
      <div className='w-1/5 bg-red-100 h-screen bg-black'>
      <p>Left Nav</p>
        <div className="m-auto">
        <button onClick={() => handleClick('essay')}>Essay</button><br></br>
        <button onClick={() => handleClick('academics')}>Academics</button>
        </div>
      </div>
      {rightPanel}
    </div>
  );
}

export default App;
