import React from 'react'
import Project from './Project'
import Link from 'next/link'

export default function Projects({ projects }) {
    return (
        <div className=" relative mt-10 px-3">
            <Link href="/projects"><a> <h4 className="text-3xl text-brown font-medium cursor-pointer hover:text-gray-800 text-start">Our Projects </h4></a>
            </Link>
            {
                projects.map((proj)=><Project {...proj} key={proj.title} />)
            }
        </div>
    )
}
