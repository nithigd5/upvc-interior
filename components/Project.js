import React from 'react'
import Image from './Image'

export default function project({ title, description, images }) {
    return (
        <div className="flex flex-col p-3">
            <div className="w-full text-left text-xl text-medium text-gray-700">{title}</div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {images && images.forEach((img)=>{
                    <Image width={500} height={500} src={img} alt="upvc interior projects" />
                })}
            </div>
            <div className="w-full text-lg font-medium text-gray-500">{description}</div>
        </div>
    )
}
