import React from 'react'
import { useState, useEffect } from 'react'

export default function Locations() {
    const [gmap, setGmap] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.383857427512!2d78.13686457585163!3d12.095629567797548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17019b40fe1b%3A0x8f8e764d1cf9f8c2!2sDream%20interiors!5e0!3m2!1sen!2sin!4v1633851465422!5m2!1sen!2sin")

    const [locations, setLocations] = useState(null)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_DOMAIN_NAME + "/api/getLocations")
            .then(res => { return res.json() })
            .then(locations => {
                setLocations(locations)
                setGmap(locations[0].src)
            })
        return (
            setLocations(null)
        )
    }, [])

    return (
        <div className="mb-4 bg-white m-3 p-3 rounded-md shadow-md" id="ourlocations">
            <h4 className="font-medium text-2xl w-full text-center py-2">Our Service Locations</h4>
            <div className="flex flex-col items-center justify-evenly w-full">
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center">
                        {locations && locations.map((loc) => {
                            return (<button key={loc.location} className="p-2 underline text-lg font-medium text-green-600 hover:text-green-700"
                                onClick={() => setGmap(loc.src)} >{loc.location}</button>)
                        })
                        }
                    </div>
                </div>
                <iframe src={gmap} width="100%" height="400" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}
