import React from "react";
import ProjectTiles from "../ProjectTiles";

function Projects() {
    return (
        <div className="w-5/6 bg-neutral-900">
            <div className="font-bold px-10 py-10 text-2xl mb-10">
                <p className="text-white">My Mixtapes</p>
            </div>
                <div className="flex justify-evenly h-1/3">
                <ProjectTiles name="Crop Disease Detection"></ProjectTiles>
                <ProjectTiles name="RIP-Proxy"></ProjectTiles>
                <ProjectTiles name="Smart Health Assistant"></ProjectTiles>
            </div>
                <div className="flex justify-evenly h-1/3 mt-10">
                    <ProjectTiles name="Ghar se Ghumo"></ProjectTiles>
                    <ProjectTiles name="ShanListens"></ProjectTiles>
                    <ProjectTiles name="Aapka Dost"></ProjectTiles>
                </div>


        </div>
    );
}

export default Projects;