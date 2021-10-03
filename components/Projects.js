import React from 'react'
import Project from './Project'

export default function Projects({ projects }) {
    return (
        <div className=" relative mt-10 px-3">
            <h4 className="text-3xl text-blue-700 font-medium cursor-pointer hover:text-gray-800 text-start">Our Projects </h4>
            {
                projects.map((proj)=><Project {...proj} key={proj.title} />)
            }
        </div>
    )
}
