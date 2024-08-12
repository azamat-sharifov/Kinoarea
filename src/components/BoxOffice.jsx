import React from 'react'
import { BoxOfficeCards } from '../assets/data'

const BoxOffice = () => {
  return (
    <section className='bg-light-black pt-14 pb-10'>
        <div className="container">
        <div className='lg:flex items-center justify-between space-y-3'>
                <div className='md:flex items-center gap-10'>
                    <h1>Кассовые сборы</h1>
                    <p className='tittle-lg mt-3'>13 марта — 15 марта</p>
                </div>
                <ul className='sm:flex items-center gap-10 space-y-1'>
                    <li className='tittle-lg text-gray hover:text-white duration-300 mt-1'><a href="#">Россия</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">Весь мир</a></li>
                    <li className='tittle-lg text-gray hover:text-white duration-300'><a href="#">США и Канада</a></li>
                </ul>
        </div>
        <ul className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
            {
                BoxOfficeCards.map((e)=> {
                    return(
                        <li className='flex items-center gap-3 py-3'>
                            <div>
                                <img src={e.img} alt={e.tittle} />
                            </div>
                            <div className='space-y-2'>
                                <h3 className="tittle-lg text-base">{e.tittle}</h3>
                                <p className="tittle-sm text-sm">{e.price}</p>
                                <p className="tittle-sm text-gray text-sm">{e.addilition}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        </div>
    </section>
  )
}

export default BoxOffice