import React from 'react';
import s from './Main.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Scrollbar, Autoplay } from "swiper";
import data from './data.json';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './Main.css';

export default function Main() {
    return (
        <div className={s.main}>
            <div className={s.leftCircleBlock}>
                <div className={s.circle+" "+s.first}></div>
                <div className={s.circle+" "+s.second}></div>
                <div className={s.circle+" "+s.third}></div>
            </div>
            <div className={s.rightCircleBlock}>
                <div className={s.circle+" "+s.first}></div>
                <div className={s.circle+" "+s.second}></div>
                <div className={s.circle+" "+s.third}></div>
            </div>
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
                modules={[Mousewheel, Pagination, Scrollbar, Autoplay]}
                className={s.mySwiper}
            >
                {data.map(v=>(
                    <SwiperSlide>
                        <img src={v} alt='' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={s.textBlock}>
                <div className={s.text}>
                    Побег в лес - туристическая база отдыха, которая подразумевает собой уединение с природой. Здесь Вы можете отдохнуть от городской суеты, оставив все заботы и дедлайны за пределами. Мы позаботились о том, чтобы Вас ничего не отвлекало от спокойного отдыха и восстановления сил для новых свершений и покорения новых вершин.<br/>
                    На нашем сайте Вы можете посмотреть, почитать и забронировать домик для проведения уикенда за городом. 
                    Подберите домик по своим предпочтениям и количеству отдыхающих.
                </div>
                <img src='./forest.webp' alt='' />
            </div>
        </div>
    )
}
