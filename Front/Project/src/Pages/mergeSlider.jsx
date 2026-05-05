 
import { Swiper, SwiperSlide } from 'swiper/react';
import './MergeSlid.css'
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import left from './imgs/left.png'
import right from './imgs/right.png'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


 export default function mergeSlider(){
     const swiperRef = useRef(null); // ← здесь будет храниться экземпляр Swiper

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev(); // ← используем метод slidePrev
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext(); // ← используем метод slideNext
        }
    };
    return(
        
        <>
         <section className='mergeSec'>
            
                <div className="MergeSlidMain">
                   
                
                    <div className="h2Creativity mergeH2">
                    <h2>
                        Мерч
                    </h2>
                    <p>
                        Vulputate eget, arcu. In enim justo, rhoncus ut, 
                        imperdiet a, venenatis vitae, justo. Nullam dictum 
                        felis eu pede mollis pretium. Integer tincidunt. 
                        Cras dapibus. Vivamus elementum semper nisi. 
                        Aenean vulputate eleifend tellus. Aenean leo 
                        ligula, porttitor eu, consequat vitae, eleifend ac, 
                        enim. Aliquam lorem ante, dapibus in, viverra quis, 
                        feugiat a, tellus. Phasellus viverra nulla ut metus 
                        varius laoreet. Quisque rutrum. Aenean imperdiet. 
                        Etiam ultricies nisi vel augue. 
                    </p>
                    <button>Узнать больше </button>
                </div>
                
                <div className="rightMerge">
                    <hr />
                   <div className="rightMainMerge">
                     <div className="butsForMerge">
                        <img onClick={handlePrev}src={left} alt="" />
                        <hr />
                        <img onClick={handleNext} src={right} alt="" />
                    </div>
                  
                    <div className="mergeSlid">
                      <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)} 
  slidesPerView={2}  // по умолчанию для ПК
  spaceBetween={5}
  breakpoints={{
    0: {
      slidesPerView: 1,  // на телефонах (0-800px) — 1 слайд
      spaceBetween: 10,
    },
    801: {
      slidesPerView: 2,  // на ПК (801px и шире) — 2 слайда
      spaceBetween: 15,
    }
  }}
  pagination={{ clickable: true }}
  modules={[Navigation]}
  className="mergeSwiper"
>
        <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
        <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
         <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
        <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
         <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
        <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
         <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
        <SwiperSlide className='slid'>
              <section></section>
                <div>
                  <h6> Открытки</h6>
                 <h3>Набор открыток  <br />“Балтийское побережье”</h3>
                 <h5>Коллекция из 10 открыток <br /> с репродукциями морских пейзажей</h5>
                 <h3>450 ₽</h3>
                </div>
        </SwiperSlide>
        
      </Swiper>

                    </div>
                   </div>
                </div>
                </div>
                    <hr className='topAndBot' />
            </section>
        </>
    )
 }