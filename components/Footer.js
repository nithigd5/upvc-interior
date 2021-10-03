import React from 'react'
import Gmap from './Gmap'
import { navItems } from './Header'
import Link from 'next/link';

export default function Footer() {
    const location = {
        lat: 11.676927,
        lng: 78.134517
    };


    return (
        <div className="relative top-full left-0 w-full bg-white">
            <div className="flex flex-col gap-3 w-full pt-4 bg-white rounded-md shadow-md z-50">
                <div className="flex-col flex md:flex-row w-full items-center justify-around">
                    <div className="flex flex-col">
                        <div>
                            <h4 className="font-semibold text-xl w-full text-center">Links</h4>
                            <div className="grid grid-cols-3 place-items-center w-full">
                                {navItems.map((navItem) => {
                                    return (<Link href={navItem.link} key={navItem.link}>
                                        <a className="p-2 text-lg font-medium text-blue-600" >
                                            {navItem.title}
                                        </a>
                                    </Link>)
                                })}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl w-full text-center">Recent Works</h4>
                            <div className="grid grid-cols-3 place-items-center w-full">
                                <div className="p-2 text-lg font-medium text-blue-600">Salem</div>
                                <div className="p-2 text-lg font-medium text-blue-600">Chennai</div>
                                <div className="p-2 text-lg font-medium text-blue-600">Erode</div>
                                <div className="p-2 text-lg font-medium text-blue-600">Tenkasi</div>
                                <div className="p-2 text-lg font-medium text-blue-600">Madurai</div>
                                <div className="p-2 text-lg font-medium text-blue-600">Namakkal</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h4 className="font-semibold text-xl w-full text-center">Our Address</h4>
                            <p className="pb-2 w-full text-center">Salem, Tamil Nadu, India <br /> Picode-636305 </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl w-full text-center">Email</h4>
                            <a className="pb-2 w-full text-center  text-blue-600" href="mailto:shopgeo.in@gmail.com">shopgeo.in@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        {/* <h4 className="font-semibold text-xl w-full text-center py-2">Our Work Locations</h4> */}
                        <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
                            <Gmap size={{ width: "300px", height: "200px" }} coord={location} />
                            <div>
                                <div className="grid grid-cols-3 place-items-center">
                                    <div className="p-2 text-lg font-medium text-blue-600">Salem</div>
                                    <div className="p-2 text-lg font-medium text-blue-600">Chennai</div>
                                    <div className="p-2 text-lg font-medium text-blue-600">Erode</div>
                                    <div className="p-2 text-lg font-medium text-blue-600">Tenkasi</div>
                                    <div className="p-2 text-lg font-medium text-blue-600">Madurai</div>
                                    <div className="p-2 text-lg font-medium text-blue-600">Namakkal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <hr className="w-full" />
                    <p className=" text-center w-full font-medium text-sm py-4">PVC Interior | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
