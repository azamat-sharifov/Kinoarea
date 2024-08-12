import React from 'react'
import { FooterAppIcon, FooterIcons, } from '../assets/data'

const Footer = () => {
  return (
    <footer className='bg-light-black pb-10 pt-24'>
        <div className="container">
            <ul className='bg-blue-odd py-20 px-10 bg-opacity-30 rounded-sm'>
                <li className='text-center'>
                    <li className='mb-10'>
                        <img className='mx-auto' src={FooterIcons} alt="footer icons" />
                    </li>
                    <li className='space-y-5'>
                        <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-3xl'>Подпишитесь на E-mail рассылку</h2>
                        <p className="tittle-lg lg:text-lg md:text-base lg:w-2/4 mx-auto font-medium">Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку!</p>
                        <div className='space-x-2'>
                            <input type="text" placeholder='Введите свой E-mail адрес'  className='outline-none py-5 px-5 w-2/5 rounded-md'/>
                            <button className='tittle-lg py-5 px-5 bg-yellow text-black rounded-md hover:bg-black hover:text-yellow duration-300'>Подписаться</button>
                        </div>
                        <li>
                            <p className="tittle-lg">Соглашаюсь на условия <a className='text-yellow decoration-2 cursor-pointer' href="#">политики конфиденциальности</a></p>
                        </li>
                    </li>
                </li>
            </ul>
            <ul className='md:text-center mt-20 space-y-8'>
                <li>
                    <img className='md:mx-auto cursor-pointer' src={FooterAppIcon} alt="footer apps" />
                </li>

                <ul className='md:flex items-center gap-10 place-content-center space-y-3'>
                    <li className='tittle-lg hover:text-gray duration-300 mt-3'><a href="#">Афиша</a></li>
                    <li className='tittle-lg hover:text-gray duration-300'><a href="#">Новости</a></li>
                    <li className='tittle-lg hover:text-gray duration-300'><a href="#">Персоны</a></li>
                    <li className='tittle-lg hover:text-gray duration-300'><a href="#">Рейтинги</a></li>
                    <li className='tittle-lg hover:text-gray duration-300'><a href="#">Рецензии</a></li>
                    <li className='tittle-lg hover:text-gray duration-300'><a href="#">Каталог фильмов</a></li>
                </ul>
                <li>
                    <p className='font-normal text-base text-gray'>2020 © Kinoarea.  Все права защищены</p>
                </li>
                <li className='font-normal text-base text-gray hover:text-white duration-300'><a href="#">Политика конфиденциальности</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer