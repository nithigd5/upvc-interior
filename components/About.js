import React from 'react'

export default function About() {
    return (
        <div id="aboutus" className="w-full overflow-hidden bg-cover bg-no-repeat p-3 bg-blend-screen"
                    style={{ backgroundImage: "url(/images/image2.jpg)" }}>
                    <h4 className="text-3xl text-gray-700 font-medium cursor-pointer hover:text-gray-800 text-center">About Us</h4>
                    <p className="font-normal text-gray-600">Hi, we are top fast growing Interior designers in India. we have a great creative minds and
                        over 10+ years of experience in Interior Designs </p>
        </div>
    )
}
