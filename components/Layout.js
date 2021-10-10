import React from 'react'
import Footer from './Footer';
import Header from "./Header"

export default function Layout({ children, className }) {
    return (
        <div className={"bg-transparent "+className} >
            <Header />
            {children}
            <Footer className="relative bottom-0 w-full" />
        </div>
    )
}
