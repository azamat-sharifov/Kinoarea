import React from 'react'
import { BestCards } from '../assets/data'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// ? Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BestFilms = () => {
  return (
    <section className='bg-hero py-10'>
        <div className="container">
            <div className='lg:flex items-center justify-between space-y-3'>
                <div>
                    <h1>Популярные фильмы</h1>
                </div>
                <ul className='sm:flex items-center gap-10 space-y-1'>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">Всё время</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">2020</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">2019</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">2018</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">2017</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">2016</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">2015</a></li>
                </ul>
            </div>
            <Swiper className='mt-10' 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
                300:{
                    slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
                {
                    BestCards.map((e)=> {
                        return(
                            <SwiperSlide className='py-5'>
                                <div className='mb-3'>
                                    <img className='w-full cursor-pointer' src={e.img} alt={e.tittle} />
                                </div>
                                <h3>{e.tittle}</h3>
                                <p className='tittle-sm'>{e.addilition}</p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default BestFilms