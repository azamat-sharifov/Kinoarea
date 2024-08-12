import React from 'react'
import { ExpectedCards, LeftIcons, RightIcons } from '../assets/data'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// ? Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Expected = () => {
  return (
    <section className='bg-light-black pt-16 pb-10'>
        <div className="container">
        <div className="md:flex items-center justify-between space-y-3">
          <h1>Последние новости</h1>
          <div className="flex items-center gap-5">
            <button>
                <img src={LeftIcons} alt="left arrow" />
            </button>
            <button>
                <img src={RightIcons} alt="right arrow" />
            </button>
          </div>
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
                ExpectedCards.map((e)=> {
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

export default Expected