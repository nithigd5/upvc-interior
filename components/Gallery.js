import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import { AiFillCaretRight, AiFillCaretLeft, AiOutlineZoomIn } from 'react-icons/ai';

export default function Gallery({ images, description, className }) {
    var scrollDiv = React.useRef()
    // const [mouseDown, setMouseDown] = useState(false);


    const scrollLeft = ()=>{
        var cur = scrollDiv.current
        var maxScroll = cur.scrollWidth
        if(cur.scrollLeft>=0 && cur.scrollLeft<= maxScroll){
            cur.scrollLeft = cur.scrollLeft - 500 
        }

        
    }
    const scrollRight = ()=>{
        var cur = scrollDiv.current
        var maxScroll = cur.scrollWidth
        if(cur.scrollLeft>=0 && cur.scrollLeft<= maxScroll){
            cur.scrollLeft = cur.scrollLeft + 500 
        }

    }


    return (
        <>
            <div className={"relative "+className} >
                {/* <div className="absolute w-full h-full bg-gray-200 opacity-50 z-10"></div> */}
                <div onMouseDown={scrollLeft} className="absolute left-5  z-30 bg-gray-200 opacity-80 flex items-center justify-center cursor-pointer w-14 h-14 top-20  rounded-full hover:bg-gray-400 md:w-20 md:h-20 ">
                    <AiFillCaretLeft className="text-6xl text-black" />
                </div>
                <div onMouseDown={scrollRight} className="absolute right-5  z-30 bg-gray-200 opacity-80 flex items-center justify-center cursor-pointer w-14 h-14 top-20  rounded-full hover:bg-gray-400 md:w-20 md:h-20 ">
                    <AiFillCaretRight className="text-6xl text-black" />
                </div>
                {/* <div className="col-span-2 md:col-span-4  z-20"> */}
                {/* <Link href="/">
                <h4 className="text-3xl text-gray-800 font-medium cursor-pointer hover:text-gray-800 text-center">
                Our Gallery</h4></Link> */}
                {/* </div> */}
                <div className="flex overflow-x-scroll w-full hide-scroll smooth-scroll" ref={scrollDiv}>
                    {images.map((img) => (
                        <div className="relative mx-3 flex-shrink-0 group shadow-md" key={img} style={{width:'300px', height:'200px'}}>
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