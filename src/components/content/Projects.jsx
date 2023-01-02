import React from "react";
import ProjectTiles from "../ProjectTiles";

function Projects() {
    const cdd_list = ['flutter.png', 'firebase.png', 'python.png'];
    const rip_list = ['flutter.png', 'firebase.png', 'python.png'];
    const sha_list = ['flutter.png', 'firebase.png', 'python.png'];
    const gsglist = ['flutter.png', 'blender.png'];
    const sglistenslist = ['python.png'];
    const aapkadostlist = ['python.png'];
    let cdd_url = "https://github.com/The-AlphaDevs/Crop-Disease-Detector-App";
    let rip_url = "https://github.com/shantanugodbole/RIP-Proxy";
    let sha_url = "https://github.com/sanb26/Health-Assistant-App";
    let gsg_url = "https://github.com/shantanugodbole/Ghar-se-Ghumo";
    let shl_url = "https://github.com/shantanugodbole/ShanListens";
    let ado_url = "https://github.com/shantanugodbole/Aapka-Dost";
    return (
        <div className="md:w-5/6 bg-neutral-900 w-full">
            <div className="font-bold px-10 py-10 text-2xl mb-10">
                <p className="text-white">My Mixtapes</p>
            </div>
            {/* <div className="flex flex-col">
            <div className="md:flex justify-evenly h-1/3">
                <ProjectTiles img="cdd.jpeg" name="Crop Disease Detection" description="Developed as part of a research internship" stack={cdd_list} url={cdd_url}></ProjectTiles>
                <ProjectTiles img="rip-proxy.png" name="RIP-Proxy" description="A Flutter app leveraging face detection" stack={rip_list} url={rip_url}></ProjectTiles>
                <ProjectTiles img="sha.png" name="Smart Health Assistant" description="A mobile app bundled with a ML diagnoser" stack={sha_list} url={sha_url}></ProjectTiles>
            </div>
                <div className="flex justify-evenly h-1/3 mt-10">
                    <ProjectTiles img="gharseghumo.jpeg" name="Ghar se Ghumo" description="Using AR to bring sights to your home." stack={gsglist} url={gsg_url}></ProjectTiles>
                    <ProjectTiles img="spotify.png" name="ShanListens" description="A Twitter bot to tweet out the songs I'm currently listening to" stack={sglistenslist} url={shl_url}></ProjectTiles>
                    <ProjectTiles img="aapka dost.jpeg" name="Aapka Dost" description="Bot to answer Covid-19 FAQs" stack={aapkadostlist} url={ado_url}></ProjectTiles>
                </div>
            </div> */}
            <div className="flex justify-center">
            <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 md:gap-y-8 gap-y-10 justify-items-center">
                <ProjectTiles img="cdd.jpeg" name="Crop Disease Detection" description="Developed as part of a research internship" stack={cdd_list} url={cdd_url}></ProjectTiles>
                <ProjectTiles img="rip-proxy.png" name="RIP-Proxy" description="A Flutter app leveraging face detection" stack={rip_list} url={rip_url}></ProjectTiles>
                <ProjectTiles img="sha.png" name="Smart Health Assistant" description="A mobile app bundled with a ML diagnoser" stack={sha_list} url={sha_url}></ProjectTiles>
                <ProjectTiles img="gharseghumo.jpeg" name="Ghar se Ghumo" description="Using AR to bring sights to your home." stack={gsglist} url={gsg_url}></ProjectTiles>
                <ProjectTiles img="spotify.png" name="ShanListens" description="A Twitter bot to tweet out the songs I'm currently listening to" stack={sglistenslist} url={shl_url}></ProjectTiles>
                <ProjectTiles img="aapka dost.jpeg" name="Aapka Dost" description="Bot to answer Covid-19 FAQs" stack={aapkadostlist} url={ado_url}></ProjectTiles>
            </div>
            </div>
            


        </div>
    );
}

export default Projects;