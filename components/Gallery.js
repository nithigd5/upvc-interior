import React from 'react'
import Link from 'next/Link'
import Image from 'next/Image'
import { AiFillCaretRight, AiFillCaretLeft, AiOutlineZoomIn } from 'react-icons/ai';

export default function Gallery({ images, description }) {

    return (
        <>
            <div className="bg-gray-50 relative ">
                {/* <div className="absolute w-full h-full bg-gray-200 opacity-50 z-10"></div> */}
                <div className="absolute left-5  z-30 bg-gray-200 opacity-80 hidden items-center justify-center cursor-pointer w-20 h-20 top-20  rounded-full hover:bg-gray-400 md:flex ">
                    <AiFillCaretLeft className="text-6xl text-black" />
                </div>
                <div className="absolute right-5  z-30 bg-gray-200 opacity-80 hidden items-center justify-center cursor-pointer w-20 h-20 top-20  rounded-full hover:bg-gray-400 md:flex ">
                    <AiFillCaretRight className="text-6xl text-black" />
                </div>
                {/* <div className="col-span-2 md:col-span-4  z-20"> */}
                {/* <Link href="/">
                <h4 className="text-3xl text-gray-800 font-medium cursor-pointer hover:text-gray-800 text-center">
                Our Gallery</h4></Link> */}
                {/* </div> */}
                <div className="flex overflow-x-scroll w-full hide-scroll">
                    {images.map((img) => (
                        <div className="relative mx-3 flex-shrink-0 group" key={img} style={{width:'400px;', height:'250px'}}>
                            <div className="absolute w-full h-full bg-black z-10 opacity-20 group-hover:opacity-80 rounded-md shadow-md cursor-pointer" >
                            </div>
                                <AiOutlineZoomIn className="cursor-pointer text-4xl text-white z-20 absolute opacity-0 group-hover:opacity-80 top-1/2 left-1/2" />
                            <Image layout="fill" src={img} title="interior design gallery" alt="interior design gallery" objectFit="cover" objectPosition="center"
                                className="rounded-md shadow-md relative" />
                        </div>)
                    )}
                </div>
            </div>
            {/* <p className="col-span-2 md:col-span-4 p-3 w-full font-normal text-lg relative text-gray-800">{description}</p> */}
        </>
    )
}