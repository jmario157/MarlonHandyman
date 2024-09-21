import { useState } from 'react'
import React from 'react'
import './Nabvar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <a href="/" className="logo">MARLON</a>

            <div className='hamburger' onClick={handleToggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a href="#home" onClick={handleLinkClick}>Home</a>
                    </li>
                    <li>
                        <a href="#About" onClick={handleLinkClick}>About Us</a>
                    </li>
                    <li>
                        <a href="#Projects" onClick={handleLinkClick}>Projects</a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={handleLinkClick}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar