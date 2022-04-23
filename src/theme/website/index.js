import React from 'react'
import { Navbar, Footer } from "shared"
import { TodoProvider } from "context/todo"

export const ThemeWebsite = ({ children, titlePage }) => {
    return (

        <TodoProvider >
            <Navbar />
            <div className="p-4 text-center " >
                <h1>{titlePage}</h1>
                {children}
            </div>
            <Footer />
        </TodoProvider>
    )
}
