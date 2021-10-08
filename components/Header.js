import React from 'react'
import { useState } from 'react'
import Menu from "./icons/menu-boxed.svg";
import Link from 'next/link'

export const navItems = [
    {title: "Home",link: "/"}, 
    { title: "Our Services", link: "/services" },
    { title: "Projects", link: "/projects" },   
    {title: "Gallery", link: "/gallery"}, 
    { title: "Contact Us", link: "/contactus"},
]

export default function Header() {
    const [isMenuOpen, openMenu] = useState(false)
    if(isMenuOpen){
        document.body.style.overflow = "hidden"
    }else{
        if(typeof window!=="undefined")
        document.body.style.overflow = "auto"
    }
    return (
        <>
            <div className="bg-transparent absolute w-full flex justify-between items-center h-16 z-40">
                <Link href="/"><div className=" cursor-pointer ml-5 font-black tracking-widest text-3xl bg-gradient-to-b from-blue-500 to-blue-800 bg-clip-text text-transparent">Dream Interiors</div></Link>
                <div className="flex-shrink-0" onClick={() => {
                    openMenu(s => !s)
                }}>
                    <Menu className="text-blue-800 mr-3 cursor-pointer transition transform hover:scale-125 md:hidden" />
                </div>
                <div className="hidden md:flex ">
                {navItems.map((navItem)=>{
                    return (<Link href={navItem.link} key={navItem.link}>
                        <a className="nav-link" >
                            {navItem.title}
                        </a>
                    </Link>)
                })}
                </div>
            </div>
            {
                isMenuOpen && <div className="w-3/4 sm:w-5/12 pt-6 px-5 flex flex-col absolute z-50 justify-start bg-white opacity-90 items-center h-screen">
                {navItems.map((navItem)=>{
                    return (<Link href={navItem.link} key={navItem.link}>
                        <a className="nav-link my-6" >
                            {navItem.title}
                        </a>
                    </Link>)
                })}
                </div>
            }
            
        </>
    )
}