
import left from './imgs/left.png'
import right from './imgs/right.png'
import './vksection.css'

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function VkSection(){
    
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    return(
        <> 
        <section className='SliderVK'>
            <hr className='hrvk'/>
            <div className="vkh2">
                <h2><u>Следите за событиями <br /> в  группе ВКонтакте</u></h2>
            </div>
            <hr className='hrvk'/>
            <div className=" butsvk">
                <img onClick={handlePrev} src={left} alt="" />
              
                <img onClick={handleNext} src={right} alt="" />
            </div>
            <hr className='hrvk'/>

            <div className="vkslider">
              <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            slidesPerView={3}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            speed={1500}
                            autoplay={{
                                delay: 50,
                                disableOnInteraction: false,
                                pauseOnMouseEnter:true,
                            }}
                            
                            loop={true}
                            modules={[ Navigation, Autoplay]}
                            className="mySwiper"
                         breakpoints={{
                                320: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 8,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 10,
                                }
                            }}
                        
                        >
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide> 
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide>
                            <SwiperSlide className='vkslid'></SwiperSlide>
                        </Swiper>
            </div>
  
           </section>
        </>
    )
}