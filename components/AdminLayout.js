import React from 'react'
import Header from "./AdminHeader"

export default function Layout({ children, className }) {
    return (
        <div className={"bg-white "+className} >
            <Header />
            {children}
        </div>
    )
}
