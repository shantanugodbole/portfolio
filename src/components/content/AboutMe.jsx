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
        <div className="bg-neutral-900 h-screen lg:w-5/6 w-full">
            <div className="h-1/5 bg-gradient-to-b from-green-800 to-neutral-900">
                <div className="text-white lg:text-3xl text-xl  font-bold lg:py-20 pl-20 py-10">
                    <p>{displayMessage}</p>
                </div>
            </div>
            <div className="md:flex grid grid-col h-3/5">
                <div className="lg:py-10 lg:px-10 lg:w-4/5 lg:h-1/2 w-1/2">
                    <img alt="shantanu" src="circle_cropped-min.webp"></img>
                </div>
                <div className="py-10">
                    <div className="flex items-baseline pl-30">
                        <p className="text-white font-bold lg:text-6xl text-4xl px-5">It's me, Hi!</p>
                        <img alt="wavinghand" className="lg:w-16 lg:h-16 w-8 h-8 animate-bounce" src="hi_emoji.webp"></img>
                    </div>
                    <div className="lg:py-15">
                        <p className="text-white font-bold lg:text-5xl text-3xl lg:py-40 py-10 px-5">I'm Shantanu, an eternally curious, seldom lazy life form </p>
                    </div>
                </div>
            </div>
            <div className="h-1/5 text-white font-bold lg:text-2xl text-xl lg:pl-20 pl-5 lg:py-20 font-spotify-book">
                <p>Passionate about tech, sports and random obscure facts</p>
                <p>Shape shifting from one form into another</p>
            </div>
        </div>
    );
}

export default AboutMe;