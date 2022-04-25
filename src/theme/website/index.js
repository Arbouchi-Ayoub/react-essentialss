import React from 'react'
import { Navbar, Footer } from "shared"

export const ThemeWebsite = ({ children, titlePage }) => {
    return (

        < >
            <Navbar />
            <div className="p-4 text-center " >
                <h1>{titlePage}</h1>
                {children}
            </div>
            <Footer />
        </>
    )
}
