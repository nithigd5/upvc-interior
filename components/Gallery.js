import React from 'react'
import Link from 'next/Link'
import Image from 'next/Image'

export default function Gallery({images, description}) {
    const imagesTag = images.map((img)=> (
        <div key={img}>
            <Image height={300} width={400}  src={img} title="interior design gallery" alt="interior design gallery" />
        </div>)
    )
    return (
        <div className="grid grid-cols-2 gap-2 bg-gray-100 p-3 md:grid-cols-4 bg-gradient-to-b from-gray-200 to-gray-50">
            <div className="col-span-2 md:col-span-4  z-20">
                <Link href="/">
                <h4 className="text-3xl text-gray-800 font-medium cursor-pointer hover:text-gray-800 text-center">
                Our Gallery</h4></Link>
            </div>
            {imagesTag}
            <p className="col-span-2 md:col-span-4 p-3 w-full font-normal text-sm text-gray-800">{description}</p>
        </div>
    )
}
