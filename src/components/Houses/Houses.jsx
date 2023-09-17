import React, { useEffect, useState } from 'react';
import Swiper, { Mousewheel, Pagination, Scrollbar } from 'swiper';
import s from './Houses.module.css';
import { SwiperSlide } from 'swiper/react';

const Houses = () => {
    let [data, setData] = useState(null);
    useEffect(()=>{
        fetch("")
    },[])
    if(!data) return (
        <div className={s.main+" "+s.load}>
            Loading please wait...
        </div>
    );
    return (
        <div className={s.main}>
            <Swiper
                slidesPerView='auto'
                mousewheel={{
                    forceToAxis:true
                }}
                onInit={swiper=>{
                    document.removeEventListener("keydown", ()=>null);
                    document.addEventListener("keydown", async event => {
                        if(event.code==="ArrowRight"){
                            event.preventDefault();
                            swiper.slideNext();
                        }else if(event.code==="ArrowLeft"){
                            event.preventDefault();
                            swiper.slidePrev();
                        }
                    });
                }}
                initialSlide={0}
                scrollbar
                loop
                autoplay={{
                    disableOnInteraction: false,
                    delay: 5000
                }}
                centeredSlides
                spaceBetween={30}
                modules={[Mousewheel, Pagination, Scrollbar]}
                className={s.mySwiper}
            >
                {}
            </Swiper>
        </div>
    );
}

export default Houses;
