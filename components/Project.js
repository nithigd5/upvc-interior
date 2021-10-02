import React from 'react'
import Image from 'next/image'
import Gallery from './Gallery'

export default function project({ title, description, images }) {
    return (
        <div className="my-10">
            <div className="w-full text-left text-2xl font-medium text-gray-600">{title}</div>
            <Gallery images={images} className="my-3 p-3 shadow-md bg-gray-200" />
            <div className="w-full text-sm font-normal text-gray-500 text-center">{description}</div>
        </div>
    )
}
