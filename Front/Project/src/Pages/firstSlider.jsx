import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import right from './imgs/left.png'
import left from './imgs/right.png'
import img1 from './imgs/fonMain1.png'
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import './firstSlid.css';
 
const slides = [
  {
    img: img1,
    year: '2020 год',
    title: 'Название картины 1',
    desc: 'Холст, масло, 100 × 200 см'
  },
  {
    img: img1,
    year: '2021 год',
    title: 'Название картины 2',
    desc: 'Акварель, бумага'
  },
  {
    img: img1,
    year: '2022 год',
    title: 'Название картины 3',
    desc: 'Смешанная техника'
  },
  {
    img: img1,
    year: '2001 год',
    title: 'Название картины',
    desc: 'Холст, масло, 100 х 200 см'
  }
];

export default function FirstSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex];
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

  return (
    <div style={{ position: 'relative' }} className='Slider1Relative'>
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        speed={800}
        className="firstSlider"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log('Swiper initialized:', swiper); // Проверка в консоли
        }}
        initialSlide={0}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="slideFirst"
              style={{ 
                backgroundImage: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="butsleftRightSlid1">
        <div onClick={handlePrev}>   
          <img src={left} alt="Previous" />
        </div>
        <div onClick={handleNext}>   
          <img src={right} alt="Next" />
        </div>
      </div>
      
      <div className="slid1Slider">
        <div className="yearSlid">
          <p>{currentSlide.year}</p>
        </div>
        <div className="nameSlid1">
          <h1>{currentSlide.title}</h1>
        </div>
        <div className="tegsSlid1">
          <p>{currentSlide.desc}</p>
        </div>
      </div>
    </div>
  );
}