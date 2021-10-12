import React from 'react'
import { AiFillCloseCircle, } from 'react-icons/ai';

export function OnSuccess({ closeModel }) {
    return (
        <div className="overlay">
            <div className="z-50 relative w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="p-10 rounded z-50 bg-white shadow-md m-auto max-w-max relative text-center">
                    <h4 className="text-xl font-medium text-gray-800">Project Added Successfully.</h4>
                    <AiFillCloseCircle
                        className="absolute z-50 text-4xl text-blue-700 right-2 top-2 bg-white rounded-full
                         transition-transform transform duration-300 hover:scale-125" onClick={() => { closeModel() }} />
                </div>
            </div>
        </div>
    )
}

export function OnFailure({ closeModel, msg }) {
    return (
        <div className="overlay">
            <div className="z-50 relative w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="p-10 rounded z-50 bg-white shadow-md m-auto max-w-max relative text-center">
                    <h4 className="text-xl font-medium text-red-700">{msg}</h4>
                    <AiFillCloseCircle
                        className="absolute z-50 text-4xl text-blue-700 right-2 top-2 bg-white rounded-full
                         transition-transform transform duration-300 hover:scale-125" onClick={() => { closeModel() }} />
                </div>
            </div>
        </div>
    )
}