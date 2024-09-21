import React from 'react'
import './About.css'
import AboutImg from '../assets/img/AboutImg.png'

const About = () => {
    return (
        <div className="about" id='About'>
            <h1>ABOUT US</h1>
            <div className='container-about'>
                <div className='container-about-text'>
                    <p className='text-about'>At Marlon Handyman Service Company, we specialize in transforming and enhancing your space, whether at home or in your business. 
                    We offer a wide range of remodeling services that include general remodeling, where we revitalize spaces and adapt each area to meet the needs and preferences 
                    of our clients, from kitchen and bathroom renovations to transforming living rooms and dining areas. Our carpentry team of expert carpenters is trained to 
                    create and repair wooden structures, including custom furniture and cabinet installations, ensuring every project reflects quality and attention to detail. 
                    We provide plumbing services that range from the installation and repair of faucets and pipes to bathroom and kitchen remodels, aiming to ensure optimal and 
                    lasting functionality in all water systems. Our certified electricians handle all electrical needs for your home or business, ensuring that every installation 
                    and repair meets the highest standards of safety and efficiency. Additionally, we transform spaces through painting, offering high-quality finishes that enhance 
                    the beauty of your home or business, whether it’s a color change or a fresh coat, with our team ensuring flawless results. Finally, we provide interior and 
                    exterior siding services, as well as framing structures to ensure stability and a perfect finish for your project.</p>
                </div>
                <div className='image-container'>
                    <img src={AboutImg} alt="" className='polygon'/>
                </div>
            </div>
        </div>
        
    )
}

export default About