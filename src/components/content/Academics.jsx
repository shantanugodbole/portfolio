import React from "react";
import EducationTiles from "../EducationTiles";


function Academics(){
    return (
        <div className="w-5/6 bg-neutral-900">
            <div className="px-10 py-10">
                <p className="text-white font-bold text-2xl">Medley of my Formative Years</p>
            </div>
            <div className="flex w-full justify-evenly h-2/5">
                <EducationTiles></EducationTiles>
                <EducationTiles></EducationTiles>
            </div>
            <div className="flex w-full justify-center mt-5 h-2/5">
                <EducationTiles></EducationTiles>
            </div>
        </div>
    );
}

export default Academics;