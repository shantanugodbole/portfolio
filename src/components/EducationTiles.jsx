import React from "react";

function EducationTiles(props){
    return(
        <div className="bg-neutral-800 rounded-lg w-1/5 hover:bg-neutral-700">
            <div className="px-5 py-5">
                <img src={props.img} alt="school" className="rounded-lg"></img>
            </div>
            <div className="text-white font-bold px-5">
            <div>{props.title}</div>
            <div>{props.description}</div>
            </div>
        </div>
    )
}

export default EducationTiles;