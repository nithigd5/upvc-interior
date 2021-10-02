import React from 'react'
import Image from 'next/Image'
import { useState } from 'react';


export default function Slider({ images }) {
    const [current, setCurrent] = useState(0);
    return (
        <div className="">   
        {images && images.map((img, i)=>(
            <div className="w-full h-full" key={img}>
                {i===current ? ( <div className="w-full relative h-96" key={img}>
                <Image src={img} layout="fill" objectFit="contain" objectPosition="center"/></div>) : null }
            </div>
        )
        )}
        </div>
    )
}
