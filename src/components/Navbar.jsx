import React from "react";
import { AppsIcons, HeroImg, NavLogo, SearchIcons } from "../assets/data";

const Navbar = () => {
  return (
    <header className="py-7 bg-hero sticky top-0 z-20 bg-opacity-96">
      <div className="container flex items-center justify-between">
        <div className="space-y-3">
          <img src={NavLogo} alt="logo" />
          <div>
            <img className="cursor-pointer" src={AppsIcons} alt="all app" />
          </div>
        </div>

        {/* Navbar */}
        <nav>
          <ul className="lg:flex hidden items-center gap-10">
            <li className="tittle-lg hover:text-blue duration-300">
              <a href="#">Афиша</a>
            </li>
            <li className="tittle-lg hover:text-blue duration-300">
              <a href="#">Медиа</a>
            </li>
            <li className="tittle-lg hover:text-blue duration-300">
              <a href="#">Фильмы</a>
            </li>
            <li className="tittle-lg hover:text-blue duration-300">
              <a href="#">Актёры</a>
            </li>
            <li className="tittle-lg hover:text-blue duration-300">
              <a href="#">Новости</a>
            </li>
            <li className="tittle-lg hover:text-blue duration-300">
              <a href="#">Подборки</a>
            </li>
            <li className="tittle-lg hover:text-blue duration-300">
              <a href="#">Категории</a>
            </li>
          </ul>
        </nav>

          <div className="flex items-center gap-2">
            <button className="nav-icons-btn">
                <img src={SearchIcons} alt="search" />
            </button>

            <button className="nav-btn">Войти</button>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
