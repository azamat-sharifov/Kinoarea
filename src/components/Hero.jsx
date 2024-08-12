import React from "react";
import { HeroCards, } from "../assets/data";

const Hero = () => {
  return (
    <section className="bg-hero pt-10 pb-10">
      <div className="container">
        <div className="lg:flex items-center justify-between">
          <div className="pb-5">
            <h1>Сейчас в кино</h1>
          </div>
          {/* hero => likns */}
          <ul className="lg:flex items-center gap-10">
            <li className="tittle-lg text-gray hover:text-white duration-300 mb-2">
              <a href="#">Все</a>
            </li>
            <li className="tittle-lg text-gray hover:text-white duration-300 mb-2">
              <a href="#">Боевики</a>
            </li>
            <li className="tittle-lg text-gray hover:text-white duration-300 mb-2">
              <a href="#">Приключения</a>
            </li>
            <li className="tittle-lg text-gray hover:text-white duration-300 mb-2">
              <a href="#">Комедии</a>
            </li>
            <li className="tittle-lg text-gray hover:text-white duration-300 mb-2">
              <a href="#">Фантастика</a>
            </li>
            <li className="tittle-lg text-gray hover:text-white duration-300 mb-2">
              <a href="#">Триллеры</a>
            </li>
            <li className="tittle-lg text-gray hover:text-white duration-300">
              <a href="#">Драма</a>
            </li>
          </ul>
        </div>

        <ul className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {HeroCards.map((i) => {
            return (
              <li className="py-4">
                <div className="mb-3">
                  <img className="w-full cursor-pointer" src={i.img} alt={i.tittle} />
                </div>
                <h3>{i.tittle}</h3>
                <p className="tittle-sm">{i.addilition}</p>
              </li>
            );
          })}
        </ul>
        <div className="text-center mt-10">
          <button className="wse-btn hover:bg-white hover:text-hero duration-300">
            Все новинки
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
