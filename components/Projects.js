import React from 'react'
import Project from './Project'

export default function Projects({ projects }) {
    return (
        <div className="bg-white p-3 relative my-6 shadow-md ">
            <h4 className="text-2xl text-gray-700 font-medium cursor-pointer hover:text-gray-800 text-center mb-3">Our Projects </h4>
            {
                projects.map((proj)=><Project {...proj} />)
            }
        </div>
    )
}
