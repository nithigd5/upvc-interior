import React from 'react'
import Image from 'next/image'
import Gallery from './Gallery'

export default function project({ title, description, images }) {
    return (
        <div className="mb-10 bg-white shadow-md rounded-md p-3 my-3 ">
            <div className="w-full text-center text-xl font-normal text-gray-600">{title}</div>
            <Gallery items={images} className="my-3 " />
            <div className="w-full text-sm font-normal text-gray-500 text-center">{description}</div>
        </div>
    )
}
