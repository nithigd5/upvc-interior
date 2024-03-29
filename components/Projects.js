import React from 'react'
import Project from './Project'
import Link from 'next/link'

export default function Projects({ projects }) {
    return (
        <div className=" relative mt-5 px-3 bg-gray-100 py-6 flex flex-col gap-4">
            <Link href="/projects"><a> <h4 className="text-2xl text-center text-brown font-medium cursor-pointer hover:text-gray-800 text-start">Our Projects </h4></a>
            </Link>
            {
               projects && projects.map((proj)=><Project {...proj} key={proj.title} />)
            }
        </div>
    )
}
