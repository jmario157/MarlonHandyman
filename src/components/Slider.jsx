import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules'
import './Slider.css'

import slide_images_1 from '../assets/img/1.jpeg'
import slide_images_2 from '../assets/img/2.jpeg'
import slide_images_3 from '../assets/img/3.jpeg'
import slide_images_5 from '../assets/img/5.jpeg'
import slide_images_6 from '../assets/img/6.jpeg'
import slide_images_7 from '../assets/img/7.jpeg'
import slide_images_8 from '../assets/img/8.jpeg'
import slide_images_9 from '../assets/img/10.jpeg'
import slide_images_10 from '../assets/img/11.jpeg'
import slide_images_11 from '../assets/img/12.jpeg'
import slide_images_12 from '../assets/img/13.jpeg'
import slide_images_13 from '../assets/img/15.jpeg'
import slide_images_14 from '../assets/img/16.jpeg'
import slide_images_15 from '../assets/img/17.jpeg'
import slide_images_16 from '../assets/img/18.jpeg'

const Slider = () => {
    return (
        <div className="container" id='Projects'>
            <h1 className="heading" >Some Projects</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2000,  // Controla el tiempo entre cada cambio (en milisegundos)
                    disableOnInteraction: false,  // Permite que el autoplay continúe después de la interacción
                }}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                pagination={{el:'.swiper-pagination', clickable:true}}
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                    clickable:true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <img src={slide_images_1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_11} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_12} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_13} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_14} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_15} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_images_16} alt="" />
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Slider