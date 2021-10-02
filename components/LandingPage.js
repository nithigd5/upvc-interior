import React from 'react'
import Footer from './Footer';
import Header from "./Header"
import Phone from "./icons/phone.svg";
import Link from 'next/link'
import Image from 'next/Image'
import Gallery from './Gallery';

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

export default function LandingPage({ children }) {

    return (
        <>
            <Header />
                {/* main */}
                <div className="w-full overflow-hidden bg-center bg-auto bg-fixed bg-no-repeat"
                >

                    <div className="flex flex-col items-center relative">
                        <div className="w-full h-full absolute">
                            <div className="w-full h-96  relative">
                                <Image src="/images/modern.jpeg" layout="fill" objectFit="cover" objectPosition="center" alt="interior design" />
                            </div>
                        </div>
                        <div className="h-28" />
                        <div className="absolute h-full w-full bg-white opacity-50 z-0" />
                        <div className="text-2xl font-medium z-20 mb-3">PVC Interiors</div>
                        <div className=" text-3xl text-center md:text-6xl font-black tracking-widest z-10 text-gray-900 justify-end">
                            Best Interior Designers in India</div>
                        <Link href="/">
                            <a className="btn transform font-medium border-2 rounded-md my-4" >Book Now</a>
                        </Link>
                        <div className="text-2xl text-center font-semibold md:text-4xl text-brown-dark flex items-center gap-2 transition
                         transform duration-300 hover:scale-110 cursor-pointer">
                            <span>Call Now : 7810005053</span>
                            <Phone className="stroke-0 stroke-current" />
                        </div>
                        <div className="p-3 text-center text-sm md:text-lg z-20 font-medium text-gray-800 mb-3">
                            Check out our Locations and Book your a amazing interior designs for your lovely house.
                        </div>
                    </div>
                </div>
                {/* Slider */}
                {/* <Slider images={sliderImages} /> */}
                {/* Gallery */}
                <Gallery {...galleryItems} />
                {/* Our Projects */}

                {/* Location */}


                {/* About us */}
            {children}

            <Footer />
        </>
    )
}
