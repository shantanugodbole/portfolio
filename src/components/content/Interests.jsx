import React from "react";
import SkillTile from "../SkillTile";

function Interests() {
    let interestArray = [
        'Deep Learning',
        'Astronomy',
        'Finance',
        'Technology',
        'Sports',
        'Running',
        'Movies',
        'Writing',
        'Music',
        'Books',
        'Travel',
        'Obscure Trivia'
    ];

    let skillArray = [
        ['Problem Solving', 'w-10/12'],
        ['Algorithms', 'w-10/12'],
        ['Data Structures','w-11/12'],
        ['Database Systems','w-9/12'],
        ['Mobile Dev', 'w-11/12'],
        ['Web Dev', 'w-1/2'],
        ['System Design','w-1/2'],
        ['Operating System','w-1/2']
    ];
    return (
        <div className="md:w-5/6 bg-neutral-900 w-screen md:h-screen h-fit">
            <div className="font-bold px-10 md:py-5 text-2xl md:mb-5">
                <p className="text-white">Studio Sessions</p>
            </div>
            <div className="flex flex-col justify-around px-10 h-1/4">
                <p className="text-white text-lg font-bold">Tools and Technologies</p>
                <div className="flex md:flex-row flex-col px-2 items-center">
                    <p className="text-white font-bold text-xl ">Proficient</p>
                    <div className="flex md:flex-row flex-col md:space-x-4 pl-10">
                        <img src="flutter.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="python.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="firebase.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="gcp.png" alt="Icon" className="w-15 h-10"></img>
                        <img src="django.png" alt="Icon" className="w-10 h-10"></img>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col px-2 items-center">
                    <p className="text-white font-bold text-xl">Intermediate</p>
                    <div className="flex md:flex-row flex-col justify-center space-x-3 pl-4">
                        <img src="sf.webp" alt="Icon" className="w-10 h-10 "></img>
                        <img src="logo512.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="tailwindcss.png" alt="Icon" className="w-15 h-10"></img>
                        <img src="java.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="javascript.png" alt="Icon" className="w-10 h-10"></img>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col px-2 items-center">
                    <p className="text-white font-bold text-xl">Beginner</p>
                    <div className="flex md:flex-row flex-col space-x-3 pl-14">
                        <img src="vue.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="nodejs.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="grapql.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="go.png" alt="Icon" className="w-10 h-10"></img>
                    </div>
                </div>
            </div>
            
            <div className="px-10 h-1/4 py-5">
                <p className="text-white font-bold text-xl">Skills</p>
                <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-1 gap-x-5 gap-y-10 px-2 mt-10">
                    {skillArray.map((item)=>{
                        return(
                            <SkillTile text={item[0]} width={item[1]}></SkillTile>
                        );
                        
                    })}
                </div>
            </div>
            <div className="px-10">
                <p className="text-white font-bold text-xl">Interests</p>
            </div>
            <div className="px-10 pt-10 grid md:grid-cols-4 md:grid-rows-3 grid-cols-2 gap-x-5 gap-y-6">
                {interestArray.map((interest)=>{
                    return(
                        // 'Hello'
                        <div className="bg-indigo-700 rounded-full text-center text-base text-white">
                            <p>{interest}</p>
                        </div>
                        
                    );
                })}
            </div>
        </div>
    );
}

export default Interests;
