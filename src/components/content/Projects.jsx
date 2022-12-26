import React from "react";
import ProjectTiles from "../ProjectTiles";

function Projects() {
    const cdd_list = ['flutter.png', 'firebase.png', 'python.png'];
    const rip_list = ['flutter.png', 'firebase.png', 'python.png'];
    const sha_list = ['flutter.png', 'firebase.png', 'python.png'];
    const gsglist = ['flutter.png', 'blender.png'];
    const sglistenslist = ['python.png'];
    const aapkadostlist = ['python.png'];
    let cdd_url = "https://github.com/The-AlphaDevs/Crop-Disease-Detector-App"
    return (
        <div className="w-5/6 bg-neutral-900">
            <div className="font-bold px-10 py-10 text-2xl mb-10">
                <p className="text-white">My Mixtapes</p>
            </div>
                <div className="flex justify-evenly h-1/3">
                <ProjectTiles img="cdd.jpeg" name="Crop Disease Detection" description="Developed as part of a research internship" stack={cdd_list} url={cdd_url}></ProjectTiles>
                <ProjectTiles img="rip-proxy.png" name="RIP-Proxy" description="A Flutter app leveraging face detection" stack={rip_list}></ProjectTiles>
                <ProjectTiles img="sha.png" name="Smart Health Assistant" description="A mobile app bundled with a ML diagnoser" stack={sha_list}></ProjectTiles>
            </div>
                <div className="flex justify-evenly h-1/3 mt-10">
                    <ProjectTiles img="gharseghumo.jpeg" name="Ghar se Ghumo" description="Using AR to bring sights to your home." stack={gsglist}></ProjectTiles>
                    <ProjectTiles img="spotify.png" name="ShanListens" description="A Twitter bot to tweet out the songs I'm currently listening to" stack={sglistenslist}></ProjectTiles>
                    <ProjectTiles img="aapka dost.jpeg" name="Aapka Dost" description="Bot to answer Covid-19 FAQs" stack={aapkadostlist}></ProjectTiles>
                </div>


        </div>
    );
}

export default Projects;