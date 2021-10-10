import React from 'react'
import { AiOutlineZoomIn, AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react'
import Image from 'next/image'

export default function GalleryGrid({ items, description }) {
    const [viewer, openViewer] = useState(null);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {items.map((img) => (
                    
                    <div onClick={() => { openViewer(img) }} className="relative mx-3 flex-shrink-0 group shadow-md" key={img.image} 
                    style={{ maxWidth: '450px', maxHeight: '250px', minHeight: '200px', minWidth: '300px' }}>

                        <div className="absolute w-full h-full bg-black z-10 opacity-20 group-hover:opacity-80 rounded-md shadow-md cursor-pointer" >
                        </div>

                        <AiOutlineZoomIn className="cursor-pointer text-4xl text-white z-20 absolute opacity-0 group-hover:opacity-80 top-1/2 left-1/2" />
                        
                        <Image layout="fill" src={img.image} title={img.title} alt={img.title} objectFit="cover" objectPosition="center"
                            className="rounded-md shadow-md relative" />

                    </div>)
                )}
            </div>
            <div className={"overlay " + (viewer ? "" : " hidden")} >
                <AiFillCloseCircle
                    className="absolute z-50 text-4xl text-blue-700 right-5 top-5 bg-white rounded-full
                         transition-transform transform duration-300 hover:scale-125" onClick={() => { openViewer(null) }} />
                {viewer &&
                    <div className="z-50 relative w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <Image src={viewer.image} alt={viewer.title} title={viewer.title} layout="fill" className="rounded-xl shadow-xl" objectFit="contain" objectPosition="center" />
                    </div>
                }
            </div>
        </>
    )
}
