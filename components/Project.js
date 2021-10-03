import React from 'react'
import Image from 'next/image'
import Gallery from './Gallery'

export default function project({ title, description, images }) {
    return (
        <div className="mb-10">
            <div className="w-full text-center text-xl font-normal text-gray-600">{title}</div>
            <Gallery images={images} className="my-3 p-3 shadow-md bg-white rounded-md" />
            <div className="w-full text-sm font-normal text-gray-500 text-center">{description}</div>
        </div>
    )
}
