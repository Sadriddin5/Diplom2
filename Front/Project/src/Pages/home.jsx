import './home.css'
import galer from './imgs/galery.png'
import left from './imgs/toLeft.png'
import right from './imgs/toRight.png'
import liniya from './imgs/liniya.png'
import oleg from './imgs/oleg.png'
import Creat1 from './imgs/Mask1.png'
import Creat2 from './imgs/Mask2.png'
import Mergeslider from './mergeSlider.jsx'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import VK from './vkSection.jsx'
export default function Home() {
 const isMobile = useMediaQuery({ maxWidth: 768 });

    const shortText = `Vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.`;

    const longText = `Vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.`;

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
        <>
            <section className="galery">
                <div className="baner1">
                    <img src={galer} alt="" />
                    <button>Посмотреть все картины</button>
                </div>
                <div className="slid1">
                    <div className="sliderButs">
                        <img src={left} alt="" onClick={handlePrev} style={{ cursor: 'pointer' }} />
                        <hr />
                        <img src={right} alt="" onClick={handleNext} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="sliderBlock">
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            slidesPerView={5}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            speed={1000}
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
                                    slidesPerView: 3.5,
                                    spaceBetween: 8,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                }
                            }}
                        
                        >
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 1" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 2" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 3" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 4" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 5" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 6" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 7" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 8" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 9" />
                            </SwiperSlide>
                            <SwiperSlide className='baner1Slid'>
                                <img src="https://via.placeholder.com/300x400" alt="slide 0" />
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className='from1977'>
                <div className="left77">
                    <h2>Сайт-музей</h2>
                    <p>Олега Александровича Мелехова</p>
                    <div className="liniyaBloc">
                        <h6>1977 год</h6>
                        <img src={liniya} alt="" />
                         <h6 className='endingKarer'>Завершение карьеры</h6>
                    </div>
                </div>
                <div className="right77">
                    <p>Пространство, посвящённое сохранению и изучению творческого
                         наследия художника. Здесь представлены произведения разных периодов, 
                        архивные материалы и исследования художественного метода.</p>
                    <p>Виртуальная экспозиция доступна для всех, кто интересуется современным
                         искусством и стремится глубже понять процессы художественного творчества.</p>
                </div>
            </section>
            <section className='bio'>
                <h2>Биография</h2>
                <div className="oleg">
                    <hr className='hroleg1'/>
                    <img src={oleg} alt="" />
                    <hr className='hroleg2'/>
                     <div className="rightbio ">
                    <div className="bio1">
                        <p>Родился в 1946 году в г. Берлине. Сочетает в своём творчестве 
                        мастерское владение живописью, графикой, скульптурой 
                        и фотографией. Художник известен своей педагогической 
                        деятельностью, которой посвятил 20 лет своей жизни.
                    </p>
                    </div>
                    <br />
                    <div className="bio2">
                       <hr />
                         <p>Олег Мелехов основал новое направление в искусстве третьего тысячелетия 
                         «Искусство Глёз». «Искусство Глёз — это Искусство сияющей Любви»:
                         искусство красоты и добра, сочетает в себе гармонию чистого цвета, 
                         ясность композиционного строя и изысканную пластику форм.
                         </p>
                      <hr /> 
                       
                       
                    </div>
                      <button>Подробная биография</button>
                    
                </div>
                <hr className='hroleg2'/>
                </div>
               
            </section>
            <section className='creativity'>
                <hr className='topAndBot' />
               <div className="mainCreat">
                 <div className="h2CreatMain">
                    <hr />
                    <div className="h2Creativity">
                    <h2>Творчество</h2>
                    <div>
                        <p>Vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                             venenatis vitae, justo. Nullam dictum felis eu pede mollis
                              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                               semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                                ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                 Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                                  tellus. Phasellus viverra nulla ut metus varius laoreet.
                                   Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                                    vel augue. 
                        </p>
                        <button>Узнать больше </button>
                    </div>
                </div>
                 </div>
                <div className="leftCreate">
                    <div className="createCard topCard">
                        <h6>xxxx</h6>
                        <img src={Creat1} alt="" />
                        <p className='namePic'>Название картины</p>
                        <p className='tecPic'>техника, формат</p>
                    </div>
                    <div className="createCard">
                        <h6>xxxx</h6>
                        <img src={Creat2} alt="" />
                        <p className='namePic'>Название картины</p>
                        <p className='tecPic'>техника, формат</p>
                    </div>
                </div>
               </div>
                <hr className='topAndBot' />
            </section>
           <Mergeslider/>
            <section className='SecMuseum'>
            <div className="museum863"></div>
             <hr />
                    <div className="museumH2 ">
                    <h2>Музей</h2>
                    <div>
                          <p>{isMobile ? longText : shortText}</p>
                        <button>Узнать больше </button>
                    </div>
                </div>
                
           </section> 
          <VK/>
         
        </>
    );
}
