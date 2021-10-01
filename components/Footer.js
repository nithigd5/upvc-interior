import React from 'react'
import Gmap from './Gmap'

export default function Footer() {
    const location = {
        lat: 11.676927,
        lng: 78.134517
      };
      
    const mapSize = {
        width: '100%',
        height: '200px'
    };
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="flex-col flex md:flex-row w-full items-center justify-center">
                <div className="flex flex-col items-center">
                    <h4 className="font-semibold text-xl w-full text-center py-2">Our Work Locations</h4>
                    <div className="flex flex-row">
                        <div className="p-2 text-lg font-medium text-blue-600">Salem</div>
                        <div className="p-2 text-lg font-medium text-blue-600">Chennai</div>
                        <div className="p-2 text-lg font-medium text-blue-600">Erode</div>
                        <div className="p-2 text-lg font-medium text-blue-600">Tenkasi</div>
                    </div>
                    <Gmap size={mapSize} coord={location} />
                </div>
                <div className="">
                    <h4 className="font-semibold text-xl w-full text-center">Our Address</h4>
                    <p className="pb-2 w-full text-center">Salem, <br />Tamil Nadu, India <br /> Picode-636305 </p>
                </div>
            </div>
            <div>
                <hr className="w-full" />
                <p className=" text-center w-full font-medium text-sm py-4">PVC Interior | All rights reserved</p>
            </div>
        </div>
    )
}
