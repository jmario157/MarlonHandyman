import React from 'react'
import './Nabvar.css'

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className="logo">MARLON</a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar