import React from "react";

function ProjectTiles(props){
    return (
        <div className="bg-neutral-800 rounded-lg hover:bg-neutral-700 w-1/6">
            <div className="font-bold text-xl text-white">
                {props.name}
            </div>
            <div>
                abcdef
            </div>
        </div>
    );
}

export default ProjectTiles;