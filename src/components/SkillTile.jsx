import React from "react";



function SkillTile(props) {
    return (
        <div class="h-6 bg-gray-200 rounded-lg dark:bg-gray-700">
            <div class="h-full bg-blue-600 text-sm font-medium text-blue-100 text-left p-0.5 leading-none rounded-lg w-1/2">{props.text}</div>
        </div>
    );
}

export default SkillTile;