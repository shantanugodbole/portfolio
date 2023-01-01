import React from "react";

function AboutMe() {
    var today = new Date();
    var curHr = today.getHours();
    var displayMessage = "";
    if (curHr < 12) {
        displayMessage = "Good Morning";
    }
    else if (curHr < 17) {
        displayMessage = "Good Afternoon";
    }
    else {
        displayMessage = "Good Evening";
    }

    return (
        <div className="bg-neutral-900 h-screen w-5/6">
            <div className="h-1/5 bg-gradient-to-b from-green-800 to-neutral-900">
                <div className="text-white text-3xl font-bold py-20 pl-20">
                    <p>{displayMessage}</p>
                </div>
            </div>
            <div className="lg:flex flex h-3/5">
                <div className="lg:py-10 lg:px-10 lg:w-4/5 lg:h-1/2 w-1/2">
                    <img alt="shantanu" src="shantanu.png"></img>
                </div>
                <div className="py-10">
                    <div className="flex items-baseline pl-30">
                        <p className="text-white font-bold text-6xl px-5">Hi!</p>
                        <img alt="wavinghand" className="w-16 h-16 animate-bounce" src="hi_emoji.png"></img>
                    </div>
                    <div className="py-15">
                        <p className="text-white font-bold text-5xl py-40 px-5">I'm Shantanu, an eternally curious, seldom lazy life form </p>
                    </div>
                </div>
            </div>
            <div className="h-1/5 text-white font-bold text-2xl pl-20 py-20">
                <p>Passionate about tech, sports and random obscure facts</p>
                <p>Shape shifting from one form into another</p>
            </div>
        </div>
    );
}

export default AboutMe;