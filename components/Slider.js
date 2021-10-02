import React from 'react'
import Image from 'next/Image'
import { useState } from 'react';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export default function Slider({ images }) {
    const {current, setCurrent} = useState(0);
    return (
        <div className="flex">   
        {images && images.map((img, i)=>(
            <div className="w-screen relative h-96" key={img}>
                <Image src={img} layout="fill" objectFit="cover" objectPosition="center"/>
            </div>
        )
        )}
        </div>
    )
}
