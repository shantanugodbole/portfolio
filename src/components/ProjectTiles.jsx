import React from "react";

function ProjectTiles(props) {

    let stack = props.stack
    console.log(stack)

    function handleClick(){
        window.open(props.url)
    }
    return (
        <div className="bg-neutral-800 rounded-lg hover:bg-neutral-700 w-1/6" onClick={handleClick}>
            <div className="rounded-lg m-auto">
                <img src={props.img} alt="placeholder" className="h-1/3 w-full"></img>
            </div>
            <div className="py-2 px-2">
                <div className="font-bold text-lg text-white">
                    {props.name}
                </div>
                <div className="py-2 text-white">
                    {props.description}
                </div>
                <div className="pt-2 flex">
                    {stack.map((tech) => (<img src={tech} alt="icon" className="h-7 w-7"></img>))}
                </div>
            </div>
        </div>
    );
}

export default ProjectTiles;