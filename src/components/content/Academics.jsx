import React from "react";
import EducationTiles from "../EducationTiles";


function Academics(){
    function handleClick(){
        window.open("https://drive.google.com/file/d/1POwxUvtuTYEdN-HrZ9nAzf2F0fF2wJXM/view")
    }

    return (
        <div className="w-5/6 bg-neutral-900">
            <div className="px-10 py-10 flex justify-between">
                <p className="text-white font-bold text-2xl">Medley of my Formative Years</p>
                <div className="group">
                {/* <p className="opacity-0 group-hover:opacity-100 text-white font-italics">My Resume!</p> */}
                <button onClick={handleClick} className="bg-indigo-700 px-2 py-2 rounded-full hover:animate-spin group-hover:opacity-50">
                    <img src="resume.png" alt="resume"></img>
                </button>
                </div>
            </div>
            <div className="flex w-full justify-evenly h-2/5">
                <EducationTiles img="balmohan.jpeg" title="Balmohan Vidyamandir" description="SSC:96%"></EducationTiles>
                <EducationTiles img="ruia.jpg" title="Ruia Junior College" description="HSC:91%"></EducationTiles>
            </div>
            <div className="flex w-full justify-center mt-5 h-2/5">
                <EducationTiles img="kjsce-logo.webp" title="K.J. Somaiya College of Engineering" description="GPA:9.45"></EducationTiles>
            </div>
        </div>
    );
}

export default Academics;