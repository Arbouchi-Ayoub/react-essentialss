import React from 'react'
import { Navbar,Footer } from "shared"

export const ThemeWebsite = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="p-2 text-center">

                {children}

            </div>
            <Footer />
        </>
    )
}
