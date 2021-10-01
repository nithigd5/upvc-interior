import React from 'react'
import { useState } from 'react'
import Menu from "./icons/menu-boxed.svg";
import Link from 'next/link'

export default function Header() {
    const [isMenuOpen, openMenu] = useState(false)

    return (
        <>
            <div className="bg-transparent absolute w-full flex p-4 justify-between z-50">
                <div className=" text-gray-900 font-semibold 
             tracking-widest text-2xl">PVC Interior</div>
                <div className="flex-shrink-0" onClick={() => {
                    openMenu(s => !s)
                }}>
                    <Menu className="text-brown-dark cursor-pointer transition transform hover:scale-125 md:hidden" />
                </div>
                <div className="hidden md:flex ">
                    <Link href="/">
                        <a className="nav-link" >
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-link" >
                            Gallery
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-link" >
                            Projects
                        </a>
                    </Link>
                    <Link href="/contactus">
                        <a className="nav-link" >
                            Contact Us
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-link" >
                            About Us
                        </a>
                    </Link>
                </div>
            </div>
            {
                isMenuOpen && <div className="w-3/4 sm:w-5/12 pt-6 px-5 flex flex-col absolute z-50 justify-between bg-gray-100 opacity-90 items-center h-screen">
                    <Link href="/">
                        <a className="nav-link" >
                            Home
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-link" >
                            Gallery
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-link" >
                            Projects
                        </a>
                    </Link>
                    <Link href="/contactus">
                        <a className="nav-link" >
                            Contact Us
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-link" >
                            About Us
                        </a>
                    </Link>
                </div>
            }
        </>
    )
}

