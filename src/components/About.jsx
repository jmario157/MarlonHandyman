import React from 'react'
import './About.css'
import AboutImg from '../assets/img/AboutImg.png'

const About = () => {
    return (
        <div className="about" id='About'>
            <h1 className='title'>About Us</h1>
            <div className='container-about'>
                <div className='container-about-text'>
                    <p className='text-about'>Marlon Handyman Service Company offers services for your home in general remodeling, doing carpentry, plumbing, electricity, painting, 
                    siding, framing, it is a general renovation company, we do residential and commercial work, offering our best effort so that customers are satisfied and very happy.</p>
                </div>
                <div className='image-container'>
                    <img src={AboutImg} alt="" className='polygon'/>
                </div>
            </div>
        </div>
        
    )
}

export default About