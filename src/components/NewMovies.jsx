import React from "react";
import { AppsIcons, ArrowIcons, LikeBtn1, LikeBtn2, NewCard1, NewCard2, NewCard3, NewCard4, NewImg, NewImg1, NewImg3, NewImg4 } from "../assets/data";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// ? Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const NewMovies = () => {
  return (
    <section className="bg-hero pt-10 pb-10">
      <div className="container">
        <div className="md:flex items-center justify-between space-y-3">
          <h1>Новые трейлеры</h1>
          <div className="flex items-center gap-3">
            <p className="tittle-lg">Все трейлеры</p>
            <img src={ArrowIcons} alt="arrow" />
          </div>
        </div>
        <Swiper
          // ? install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="mt-10">
            <img className="rounded-lg bg-cover bg-center w-full cursor-pointer" src={NewImg} alt="new img" />
          </SwiperSlide>
          <SwiperSlide className="mt-10">
            <img className="rounded-lg w-full cursor-pointer bg-cover bg-center" src={NewImg1} alt="new img" />
          </SwiperSlide>
          <SwiperSlide className="mt-10">
            <img className="rounded-lg w-full cursor-pointer" src={NewImg3} alt="new img" />
          </SwiperSlide>
          <SwiperSlide className="mt-10">
            <img className="rounded-lg w-full cursor-pointer" src={NewImg4} alt="new img" />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-between mt-5">
            <div className="flex gap-8 items-center">
            <h2>Форсаж 9</h2>
                <img className="sm:flex hidden" src={AppsIcons} alt="icons" />
            </div>
            <div className="space-x-2">
                <button className="icons-btn-left">
                    <img src={LikeBtn1} alt="like" />
                </button>
                <button className="icons-btn-right">
                    <img className="w-full cursor-pointer" src={LikeBtn2} alt="like" />
                </button>
            </div>
        </div>
        <ul className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-12">
            <li className="space-y-2 py-5">
                <div>
                    <img className="w-full cursor-pointer" src={NewCard1} alt="card-img" />
                </div>
                <h3>Мулан</h3>
            </li>
            <li className="space-y-2 py-5">
                <div>
                    <img className="w-full cursor-pointer" src={NewCard2} alt="card-img" />
                </div>
                <h3>Форсаж 9</h3>
            </li>
            <li className="space-y-2 py-5">
                <div>
                    <img className="w-full cursor-pointer" src={NewCard3} alt="card-img" />
                </div>
                <h3>Чёрная Вдова</h3>
            </li>
            <li className="space-y-2 py-5">
                <div>
                    <img className="w-full cursor-pointer" src={NewCard4} alt="card-img" />
                </div>
                <h3>Тихое место 2</h3>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default NewMovies;
