import React from 'react'
import Image from 'next/image'

export default function Service({title, description, image}) {
    return (
        <div className="relative flex items-center justify-center max-w-96 w-full h-56 group hover:shadow-xl  shadow-lg rounded-xl overflow-hidden cursor-pointer bg-white">
            <h4 className="text-2xl md:3xl font-bold text-white z-20">
                {title}
            </h4>
            <div className="w-full h-full absolute bg-black opacity-10 z-10 group-hover:opacity-20" />
            <Image layout="fill" src={image} alt={title} title={title} objectPosition="center" objectFit="cover" />
        </div>
    )
}
