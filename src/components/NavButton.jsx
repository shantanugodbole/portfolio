import React from "react";


function NavButton(props){
    return (
        <button onClick={props.onClick}>
        <div className="flex px-5 py-3">
            <img alt="icon_home" src={props.img}></img>
            <div className="text-white font-bold align-left pl-5">
            {props.name}
            </div>
        </div>
        </button>
        
    );
}

export default NavButton;