import React from 'react'
import { ArrowIcons, LaImg, LaImg1, LaImg2, LaImg3, LaImg4 } from '../assets/data'

const LaNews = () => {
  return (
    <section className='bg-hero pt-14 pb-10'>
        <div className="container">
        <div className="md:flex items-center justify-between space-y-3">
          <h1>Последние новости</h1>
          <div className="flex items-center gap-3">
            <p className="tittle-lg">Все трейлеры</p>
            <img src={ArrowIcons} alt="arrow" />
          </div>
        </div>
        <ul className='py-10 md:flex items-center gap-5 lg:columns-5'>
            <li className='mt-10'>
                <img className='cursor-pointer rounded-lg' src={LaImg} alt="la img" />
            </li>
            <ul className='space-y-2 mt-10'>
                <li className='cursor-pointer'>
                    <img className='w-full' src={LaImg1} alt="la news" />
                </li>
                <li className='cursor-pointer'>
                    <img className='w-full' src={LaImg2} alt="la news" />
                </li>
                <li className='cursor-pointer'>
                    <img className='w-full' src={LaImg3} alt="la news" />
                </li>
                <li className='cursor-pointer'>
                    <img className='w-full' src={LaImg4} alt="la news" />
                </li>
            </ul>
        </ul>
        </div>
    </section>
  )
}

export default LaNews