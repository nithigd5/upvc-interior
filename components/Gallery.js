import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { AiFillCaretRight, AiFillCaretLeft, AiOutlineZoomIn, AiFillCloseCircle } from 'react-icons/ai';
import image from 'next/image';

export default function Gallery({ items , description, className }) {
    var scrollDiv = React.useRef()
    const [viewer, openViewer] = useState(null);

    const scrollLeft = () => {
        var cur = scrollDiv.current
        var maxScroll = cur.scrollWidth
        if (cur.scrollLeft >= 0 && cur.scrollLeft <= maxScroll) {
            cur.scrollLeft = cur.scrollLeft - 500
        }


    }
    const scrollRight = () => {
        var cur = scrollDiv.current
        var maxScroll = cur.scrollWidth
        if (cur.scrollLeft >= 0 && cur.scrollLeft <= maxScroll) {
            cur.scrollLeft = cur.scrollLeft + 500
        }

    }
    function isOverflown(element) {
        if (typeof window !== "undefined")
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        else return true
    }
    

    if (viewer != null) {
        document.body.style.overflow = "hidden"
    } else {
        if (typeof window !== "undefined")
            document.body.style.overflow = "auto"
    }
    return (
        <>
            <div className={"relative " + className} >
                {/* <div className="absolute w-full h-full bg-gray-200 opacity-50 z-10"></div> */}
                <div onMouseDown={scrollLeft} className={`absolute left-5  z-30 bg-gray-200 opacity-80 items-center justify-center cursor-pointer w-10 h-10 top-16  rounded-full hover:bg-gray-400 flex `}>
                    <AiFillCaretLeft className="text-2xl text-black" />
                </div>
                <div onMouseDown={scrollRight} className="absolute right-5  z-30 bg-gray-200 opacity-80 flex items-center justify-center cursor-pointer w-10 h-10 top-16  rounded-full hover:bg-gray-400">
                    <AiFillCaretRight className="text-2xl text-black" />
                </div>
                {/* <div className="col-span-2 md:col-span-4  z-20"> */}
                {/* <Link href="/">
                <h4 className="text-3xl text-gray-800 font-medium cursor-pointer hover:text-gray-800 text-center">
                Our Gallery</h4></Link> */}
                {/* </div> */}
                <div className="flex overflow-x-scroll w-full hide-scroll smooth-scroll" ref={scrollDiv}>
                    {items.map((img) => (
                        <div onClick={() => { openViewer(img) }} className="relative mx-3 flex-shrink-0 group shadow-md" key={img.image} style={{ width: '200px', height: '150px' }}>
                            <div className="absolute w-full h-full bg-black z-10 opacity-20 group-hover:opacity-80 rounded-md shadow-md cursor-pointer" >
                            </div>
                            <AiOutlineZoomIn className="cursor-pointer text-4xl text-white z-20 absolute opacity-0 group-hover:opacity-80 top-1/2 left-1/2" />
                            <Image layout="fill" src={img.image} title={img.title} alt={img.title} objectFit="cover" objectPosition="center"
                                className="rounded-md shadow-md relative" />
                        </div>)
                    )}
                </div>
            </div>
            <p className="col-span-2 md:col-span-4 p-3 w-full font-normal text-lg relative text-gray-800">{description}</p>

            <div className={"overlay " + (viewer ? "" : " hidden")} >
                        <AiFillCloseCircle 
                        className="absolute z-50 text-4xl text-blue-700 right-5 top-5 bg-white rounded-full
                         transition-transform transform duration-300 hover:scale-125" onClick={() => { openViewer(null) }} />
                {viewer &&
                    <div className="z-50 relative w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <Image src={viewer.image} alt={viewer.title} title={viewer.title} layout="fill" className="rounded-xl shadow-xl" objectFit="contain" objectPosition="center"/>
                    </div>
                }
            </div>  
        </>
    )
}