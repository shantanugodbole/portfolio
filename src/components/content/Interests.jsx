import React from "react";

function Interests(){
    return (
        <div className="w-5/6 bg-neutral-900">
            <div className="font-bold px-10 py-5 text-2xl mb-5">
                <p className="text-white">Studio Sessions</p>
            </div>
            <div className="px-10 h-1/4">
                <p className="text-white text-lg font-bold">Tools and Technologies</p>
                <div className="flex flex-row px-2">
                    <p className="text-white font-bold text-xl">Proficient:</p>
                    <div className="flex flex-row space-x-3 px-2">
                        <img src="flutter.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="python.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="firebase.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="gcp.png" alt="Icon" className="w-15 h-10"></img>
                        <img src="django.png" alt="Icon" className="w-15 h-10"></img>
                    </div>
                </div>
                <div className="flex flex-row px-2">
                <p className="text-white font-bold text-xl">Intermediate:</p>
                    <div className="flex flex-row space-x-3 px-2">
                        <img src="sf.webp" alt="Icon" className="w-10 h-10"></img>
                        <img src="logo512.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="tailwindcss.png" alt="Icon" className="w-15 h-10"></img>
                        <img src="java.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="javascript.png" alt="Icon" className="w-10 h-10"></img>
                    </div>
                </div>
                <div className="flex flex-row px-2">
                <p className="text-white font-bold text-xl">Beginner:</p>
                    <div className="flex flex-row space-x-3 px-2">
                        <img src="vue.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="nodejs.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="grapql.png" alt="Icon" className="w-10 h-10"></img>
                        <img src="go.png" alt="Icon" className="w-10 h-10"></img>
                    </div>
                </div>
            </div>
            <div className="px-10 h-1/4">
                <p>Skills</p>
            </div>
            <div className="px-10">
                <p>Interests</p>
            </div>
        </div>
    );
}

export default Interests;