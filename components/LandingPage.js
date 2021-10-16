import React from 'react'
import Footer from './Footer';
import Header from "./Header"
import Phone from "./icons/phone.svg";
import Link from 'next/link'
import Image from 'next/image'
import Gallery from './Gallery';
import Projects from './Projects';
import Locations from './Locations'
import Service from './Service'

const sliderImages = ["/images/i (1).jpg", "/images/i (2).jpg", "/images/i (3).jpg", "/images/i (4).jpg"]

export default function LandingPage({ galleryItems, projects, children, services }) {

    return (
        <>
            <Header />
            {/* main */}
            <div className="w-full overflow-hidden bg-center bg-auto bg-fixed bg-no-repeat mb-4">
                <div className="flex flex-col items-center relative justify-center">
                    <div className="absolute w-full h-full">
                        <div className="relative" style={{ width: "100%", height: "100%" }}>
                            <Image src="/images/modern.jpeg" layout="fill" objectFit="cover" objectPosition="center" alt="interior design" />
                        </div>
                    </div>
                    <div className="h-28" />
                    <div className="absolute h-full w-full bg-white opacity-50 z-0" />
                    <div className="text-xl font-semibold z-20 text-brown flex-shrink-0 w-max ">Dream Interiors</div>
                    <div className=" text-2xl text-center md:text-3xl font-black tracking-wide z-10 text-brown-dark bg-clip-text text-transparent justify-end">
                        Looking for Best UPVC Interior Designers in Tamil Nadu, You are at right place.</div>
                    <Link href="/contactus">
                        <a className="btn bg-brown-light hover:text-brown transform font-medium border-2 rounded-md my-4 flex-shrink-0" >Book Now</a>
                    </Link>
                    <div className="text-2xl text-center font-semibold md:text-3xl text-brown-dark flex items-center gap-2 transition
                         transform duration-300 hover:scale-110 cursor-pointer">
                        <span>Call Now : +91 {process.env.NEXT_PUBLIC_OWNER_PHONE}</span>
                        <Phone className="stroke-0 stroke-current" />
                    </div>
                    <div className="p-3 text-center text-sm md:text-lg z-20 font-bold text-brown-light">
                        Check out our Locations and Book your amazing interior designs for your lovely house.
                    </div>
                </div>
            </div>
            {/* Slider */}
            {/* <Slider images={sliderImages} /> */}
            {/* Gallery */}
            <Gallery {...galleryItems} className="my-3 p-3 shadow-md bg-gray-200" />
            {/* Our Projects */}
            <Projects projects={projects} />
            {/* Location */}
            <Locations />
            {/* About us */}
{/* 
            <div className="bg-white w-full ansolute">
                    <div className="h-16 w-full" />
                    <h4 className="text-3xl font-medium m-auto p-3 text-center">Our Services</h4>
                    {services.map(service=>{
                        return(
                            <div className="bg-gray-100 p-4" key={service.id}>
                                <h4 className="text-2xl font-medium text-gray-600 pb-3">
                                    {service.serviceName}
                                </h4>
                                <div className="flex flex-col md:grid gap-2 md:grid-cols-3 p-3 ">
                                    {service.services.map(s=>{
                                        return (<Service {...s} key={s.id} />)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div> */}

            {children}


            <Footer />

        </>
    )
}
