import React from "react";

function WorkExperience(){
    return (
        <div className="w-5/6 bg-neutral-900">
            <div className="font-bold px-10 py-10 text-2xl mb-10">
                <p className="text-white">My Studio Albums</p>
            </div>
            <div className="px-10">
            <ol class="relative border-l border-gray-200 dark:border-gray-700 my-12">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jul '22 to Currently
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Campus Associate at Colgate-Palmolive
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Part of the team responsible for migrating Master Data reports
              from SAP ecosystem into Snowflake and Sigma archetype to provide
              better business insights
            </p>
            <div className="flex pt-1">
                <p className="font-bold text-white"> Worked with: </p>
                <img src="sigma.png" alt="logo" className="h-5 w-5 mx-2"></img>
                <img src="sf.webp" alt="logo" className="h-5 w-5 mx-2"></img>
                <img src="dbt.png" alt="logo" className="h-5 w-15 mx-2"></img>
                <img src="airflow.png" alt="logo" className="h-5 w-15 mx-2"></img>
            </div>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jan '22 to July '22
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Intern at Colgate-Palmolive
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Created a system using React to streamline onboarding of new
              recruits into their remote roles at the company
            </p>
            <div className="flex pt-1">
                <p className="font-bold text-white"> Worked with: </p>
                <img src="logo512.png" alt="logo" className="h-5 w-5 mx-2"></img>
                <img src="gcp.png" alt="logo" className="h-5 w-10 "></img>
                <img src="tailwindcss.png" alt="logo" className="h-5 w-15 mx-2"></img>
                <img src="firebase.png" alt="logo" className="h-5 w-15 mx-2"></img>
            </div>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Feb '21 to May '21
            </time>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Flutter Intern at FOLK Developers
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Contributed on implementing Frontend modules for the FOLK app and
              gained great experience of the Agile process and wrote code for
              deployed apps.
            </p>
            <div className="flex">
                <p className="font-bold text-white"> Worked with: </p>
                <img src="flutter.png" alt="logo" className="h-5 w-5 mx-2"></img>
                <img src="gcp.png" alt="logo" className="h-5 w-10 "></img>
                <img src="firebase.png" alt="logo" className="h-5 w-15 mx-2"></img>
            </div>
          </li>

          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March '20 to July '20
            </time>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Flutter & Deep Learning Intern at KJSCE
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Responsible for creating a Deep Learning model to classify crop
              diseases using leaf images and integrating the classifer into a
              mobile application for farmers to use.
            </p>
            <div className="flex">
                <p className="font-bold text-white"> Worked with: </p>
                <img src="flutter.png" alt="logo" className="h-5 w-5 mx-2"></img>
                <img src="python.png" alt="logo" className="h-5 w-5 mx-2"></img>
                <img src="firebase.png" alt="logo" className="h-5 w-15 mx-2"></img>
            </div>
          </li>
        </ol>
            </div>
            
        </div>
    );
}

export default WorkExperience;