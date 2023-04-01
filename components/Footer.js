import React from 'react'
import { navItems } from './Header'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import FbChatPlugin from './FbChatPlugin'

// const serviceLocations = [
//     {   
//         id: 1,
//         location: "Dharmapuri",
//         coord : "" 
//     },{   
//         id: 1,
//         location: "Mettur",
//         coord : "" 
//     },{   
//         id: 1,
//         location: "Krishnagiri",
//         coord : "" 
//     },{   
//         id: 1,
//         location: "Arur",
//         coord : "" 
//     },{   
//         id: 1,
//         location: "Hosur",
//         coord : "" 
//     },
//     {   
//         id: 1,
//         location: "Thirupatur",
//         coord : "" 
//     },{   
//         id: 1,
//         location: "Tiruvannamalai",
//         coord : "" 
//     },{   
//         id: 1,
//         location: "Kallakurichi",
//         coord : "" 
//     },
// ]

export default function Footer(props) {

    const [gmap, setGmap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.383857427512!2d78.13686457585163!3d12.095629567797548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17019b40fe1b%3A0x8f8e764d1cf9f8c2!2sDream%20interiors!5e0!3m2!1sen!2sin!4v1633851465422!5m2!1sen!2sin")

    const [locations, setLocations] = useState(null)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/getLocations")
            .then(res => { return res.json() })
            .then(locations => {
                setLocations(locations)
                setGmap(locations[0].src)
            })
        return (setLocations(null))
    }, [])

    return (
        <>
            <FbChatPlugin />
            <div className="relative top-full left-0 w-full bg-white" {...props}>
                <div className="flex flex-col gap-3 w-full pt-4 bg-gray-50 rounded-md shadow-md z-50">
                    <div className="flex-col flex md:flex-row w-full items-center justify-around">
                        <div className="flex flex-col">
                            <div>
                                <h4 className="font-semibold text-xl w-full text-center text-brown-dark">Links</h4>
                                <div className="grid grid-cols-3 md:grid-cols-1 place-items-center w-full">
                                    {navItems.map((navItem) => {
                                        return (<Link href={navItem.link} key={navItem.link}>
                                            <a className="py-1 text-md font-medium text-brown-light text-center" >
                                                {navItem.title}
                                            </a>
                                        </Link>)
                                    })}
                                    <Link href="/login" key="login">
                                        <a className="py-1 text-md font-medium text-brown-light text-center" >
                                            Login
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* <div>
                            <h4 className="font-semibold text-xl w-full text-center text-brown-dark">Service Locations</h4>
                            <div className="grid grid-cols-3 place-items-center w-full">
                            {serviceLocations && serviceLocations.map(ser=>{
                                return <div className=" text-md py-1 font-medium text-brown" key={ser.id}>{ser.location}</div>
                            })}
                            </div>
                        </div> */}
                        </div>
                        <div className="grid grid-cols-2 place-content-center items-center justify-center gap-3">
                            <div>
                                <h4 className="font-semibold text-lg w-full text-center text-brown">Office Address</h4>
                                <p className="w-full text-center text-brown-light font-medium">
                                    {process.env.NEXT_PUBLIC_ADDRESS_LINE1} <br />
                                    {process.env.NEXT_PUBLIC_ADDRESS_LINE2} <br />
                                    {process.env.NEXT_PUBLIC_ADDRESS_LINE3} <br />  </p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold text-lg w-full text-center text-brown">Phone</h4>
                                <span className="w-full text-center font-medium  text-brown-light">+91 {process.env.NEXT_PUBLIC_OWNER_PHONE}</span>
                            </div>
                            <div className=" text-brown col-span-2 text-center">
                                <h4 className="font-semibold text-xl w-full text-center">Email</h4>
                                <a className="w-full text-center text-brown-light font-medium" href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_MAIL}`}>{process.env.NEXT_PUBLIC_ADMIN_MAIL}</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl w-full text-center py-2 text-brown">Our Service Locations</h4>
                            <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
                                <iframe src={gmap} width="300" height="200" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                                <div>
                                    <div className="grid grid-cols-2 place-items-start">
                                        {locations && locations.map((loc) => {
                                            return (<button key={loc.location} className="p-2 text-lg font-medium text-brown-light hover:text-gray-700"
                                                onClick={() => setGmap(loc.src)} >{loc.location}</button>)
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <hr className="w-full" />
                        <p className=" text-center w-full font-medium text-sm py-4">Web Developer | All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}
