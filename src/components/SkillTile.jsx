import classNames from "classnames";
import React from "react";



function SkillTile(props) {
    return (
        <div class="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 ">
            <div class={classNames("h-full bg-blue-600 text-sm font-medium text-blue-100 text-left p-1 leading-none rounded-lg align-text-bottom", props.width)}>{props.text}</div>
        </div>
    );
}

export default SkillTile;