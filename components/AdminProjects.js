import React from 'react'
import Project from './AdminProject'
import Link from 'next/link'

export default function Projects({ projects }) {

    return (
        
            <div className="relative mt-10 bg-gray-50 flex flex-col">
                <div className="flex flex-row gap-2 items-center justify-center py-2">
                    <Link href="/projects">
                        <a>
                            <h4 className="text-3xl text-gray-800 font-medium cursor-pointer hover:text-gray-800 text-start">Projects </h4>
                        </a>
                    </Link>

                </div>
                {   
                    projects.length>0 ?
                    projects.map((proj) => <Project {...proj} key={proj._id} />) :
                     <div className="text-xl text-center  font-medium">No Projects, Please Add the Projects.</div>
                }
            </div>
    )
}
