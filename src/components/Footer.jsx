import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './StyleF.css';


const Footer = () => {
    return (
        <footer>
            <div className='waves'>
                <div className='wave' id='wave1'></div>
                <div className='wave' id='wave2'></div>
                <div className='wave' id='wave3'></div>
                <div className='wave' id='wave4'></div>

            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100063642907437" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/marlon_handyman_services_llc_?igsh=cTU1cDJxMmVpeXdl" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="mailto:marlonhandyman2017@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-google"></i>
                </a>
            </div>
            <div className='menu'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </div>
            <p className='derechos'>© 2024 MarlonHandyman. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
