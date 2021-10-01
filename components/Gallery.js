import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
    return (
        <div className="grid grid-cols-2 gap-2 bg-gray-100 p-3 md:grid-cols-3 bg-gradient-to-b from-gray-200 to-gray-50">
            <div className="col-span-2 md:col-span-3">
                <Link href="/"><h4 className="text-3xl text-gray-700 font-medium cursor-pointer hover:text-gray-800 text-center">Our Gallery</h4></Link>
            </div>
            <Image src="/images/i (1).jpg" alt="interior design gallery" className="" width={300} height={300} />
            <Image height={300} width={300} src="/images/i (2).jpg" alt="interior design gallery" className=" " />
            <Image height={300} width={300} src="/images/i (3).jpg" alt="interior design gallery" className="" />
            <Image height={300} width={300} src="/images/i (4).jpg" alt="interior design gallery" className="" />
            <Image height={300} width={300} src="/images/i (5).jpg" alt="interior design gallery" className="" />
            <Image height={300} width={300} src="/images/i (6).jpg" alt="interior design gallery" className="" />

            <p className="col-span-2 md:col-span-3 p-3 w-full font-normal text-sm text-gray-800">Do you want to setup a PVC modular kitchen for your home? You have come to the right place.
                We have PVC modular kitchens for different customers. Our company has a lot of customers, especially salem head office branch office coimbatore,
                bangalore, hosur, chennai, kirshnagiri, madurai, pollachi, erode, namakkal, tenkasi, kanyakumari.
                PVC and PVC modular kitchen is a material that has no hassles like water solids and rusting.</p>
        </div>
    )
}
