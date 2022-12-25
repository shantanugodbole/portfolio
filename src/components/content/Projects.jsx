import React from "react";
import ProjectTiles from "../ProjectTiles";

function Projects() {
    return (
        <div className="w-5/6 bg-neutral-900">
            <div className="font-bold px-10 py-10 text-2xl mb-10">
                <p className="text-white">My Mixtapes</p>
            </div>
                <div className="flex justify-evenly h-1/3">
                <ProjectTiles name="Crop Disease Detection" description="Developed as part of a research internship"></ProjectTiles>
                <ProjectTiles name="RIP-Proxy" description="A Flutter app designed to use Face Detection to mark student presence"></ProjectTiles>
                <ProjectTiles name="Smart Health Assistant" description="A mobile app bundled with a ML predictor to help diagnosis"></ProjectTiles>
            </div>
                <div className="flex justify-evenly h-1/3 mt-10">
                    <ProjectTiles name="Ghar se Ghumo" description="An Augmented Reality application to aid people trapped at home during the pandemic"></ProjectTiles>
                    <ProjectTiles name="ShanListens" description="A Twitter bot to tweet out the songs I'm currently listening to"></ProjectTiles>
                    <ProjectTiles name="Aapka Dost" description="A smart CLI tool to disseminate FAQs about Covid-19"></ProjectTiles>
                </div>


        </div>
    );
}

export default Projects;