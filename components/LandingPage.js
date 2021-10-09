import React from 'react'
import Footer from './Footer';
import Header from "./Header"
import Phone from "./icons/phone.svg";
import Link from 'next/link'
import Image from 'next/image'
import Gallery from './Gallery';
import Projects from './Projects';

const location = {
    lat: 11.676927,
    lng: 78.134517
};

const mapSize = {
    width: '100%',
    height: '200px'
};

const galleryItems = {
    images: ["/images/i (1).jpg", "/images/i (2).jpg", "/images/i (3).jpg", "/images/i (4).jpg", "/images/i (5).jpg", "/images/i (6).jpg"],
    description: "Do you want to setup a PVC modular kitchen for your home? You have come to the right place. We have PVC modular kitchens for different customers. Our company has a lot of customers, especially salem head office branch office coimbatore, and all over tamil nadu."
}

const sliderImages = ["/images/i (1).jpg", "/images/i (2).jpg", "/images/i (3).jpg", "/images/i (4).jpg"]

export default function LandingPage({ projects, children }) {

    return (
        <>
            <Header />
            {/* main */}
            <div className="w-full overflow-hidden bg-center bg-auto bg-fixed bg-no-repeat mb-4">
                <div className="flex flex-col items-center relative">
                    <div className="absolute w-full h-full">
                        <div className="relative" style={{ width: "100%", height: "100%" }}>
                            <Image src="/images/modern.jpeg" layout="fill" objectFit="cover" objectPosition="center" alt="interior design" />
                        </div>
                    </div>
                    <div className="h-28" />
                    <div className="absolute h-full w-full bg-white opacity-50 z-0" />
                    <div className="text-2xl font-semibold z-20 mb-3 text-blue-800">Dream Interiors</div>
                    <div className=" text-3xl text-center md:text-5xl font-black tracking-wide z-10 bg-gradient-to-b from-blue-700 to-blue-800 bg-clip-text text-transparent justify-end">
                        Best Interior Designers in Tamil Nadu</div>
                    <Link href="/contactus">
                        <a className="btn transform font-medium border-2 rounded-md my-4 " >Book Now</a>
                    </Link>
                    <div className="text-2xl text-center font-semibold md:text-3xl text-blue-900 flex items-center gap-2 transition
                         transform duration-300 hover:scale-110 cursor-pointer">
                        <span>Call Now : {process.env.NEXT_PUBLIC_OWNER_PHONE}</span>
                        <Phone className="stroke-0 stroke-current" />
                    </div>
                    <div className="p-3 text-center text-sm md:text-lg z-20 font-medium text-gray-700">
                        Check out our Locations and Book your a amazing interior designs for your lovely house.
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


            {/* About us */}
            {children}


            <Footer />

        </>
    )
}
