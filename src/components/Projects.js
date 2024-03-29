import { CodeIcon, ArrowRightIcon } from "@heroicons/react/solid";

import React from "react";
import { projects} from '../data';

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-20">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Some of the Projects i have worked on:
                    </p>
                </div>
                <div className="flex flex-wrap m-4">
                    {projects.map((project)=>(
                        <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/3 w-100 p-3">
                            <div className="flex relative">
                                <img alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={project.image}/>
                                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="d-flex justify-content-center mb-20 mt-20">

                    <a href='https://github.com/tvinnie' className='inline-flex items-center bg-green-500 border-0 py-2 px-6 text-white focus:outline-none hover:bg-green-700 rounded text-base nt-4 md:mt-0'>
                    More Projects
                    <ArrowRightIcon className='w-4 h-4 ml-1'/>
                    </a>
                </div>
            </div>
        </section>
    );
}