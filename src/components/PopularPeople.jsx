import React from 'react'
import { PeopleImg1, PeopleImg2 } from '../assets/data'

const PopularPeople = () => {
  return (
    <section className='bg-hero pt-16 pb-10'>
        <div className="container">
            <div className='md:flex items-center justify-between space-y-3'>
                <div>
                    <h1>Популярные персоны</h1>
                </div>
                <ul className='sm:flex items-center gap-10 space-y-1'>
                    <li className='tittle-lg text-gray hover:text-white duration-300 mt-1'><a href="#">За год</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">За месяц</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">За неделю</a></li>
                </ul>
            </div>

            <ul className='grid lg:grid-cols-3 md:grid-cols-2 items-center gap-5 mt-16'>
                <li>
                    <img className='w-full cursor-pointer' src={PeopleImg1} alt="people img" />
                </li>

                <li>
                    <img className='w-full cursor-pointer' src={PeopleImg2} alt="people img" />
                </li>

                <ul className=''>
                    <li className='flex items-center justify-between px-7 py-5 bg-right-blue rounded-md'>
                        <div>
                            <h3>Тинто Брасс</h3>
                            <p className="tittle-sm text-gray">Tinto Brass</p>
                            <p className="tittle-sm">87 лет</p>
                        </div>
                        <div>
                            <p className="tittle-sm text-base font-semibold">3-е место</p>
                        </div>
                    </li>

                    <li className='flex items-center justify-between px-7 py-5 bg-right-blue rounded-md'>
                        <div>
                            <h3>Джеки Чан</h3>
                            <p className="tittle-sm text-gray">Jackie Chan</p>
                            <p className="tittle-sm">66 лет</p>
                        </div>
                        <div>
                            <p className="tittle-sm text-base font-semibold">4-е место</p>
                        </div>
                    </li>

                    <li className='flex items-center justify-between px-7 py-5 bg-right-blue rounded-md'>
                        <div>
                            <h3>Том Харди</h3>
                            <p className="tittle-sm text-gray">Tom Hardy</p>
                            <p className="tittle-sm">42 года</p>
                        </div>
                        <div>
                            <p className="tittle-sm text-base font-semibold">5-е место</p>
                        </div>
                    </li>

                    <li className='flex items-center justify-between px-7 py-5 bg-right-blue rounded-md'>
                        <div className=''>
                            <h3>Акшай Кумар</h3>
                            <p className="tittle-sm text-gray">Akshay Kumar</p>
                            <p className="tittle-sm">52 года</p>
                        </div>
                        <div>
                            <p className="tittle-sm text-base font-semibold">6-е место</p>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
    </section>
  )
}

export default PopularPeople