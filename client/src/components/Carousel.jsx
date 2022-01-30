import React, { useState } from 'react';

const Carousel = ({ items }) => {
  return (
    <div className=' w-full h-1/4 my-5 md:h-1/3 flex flex-row overflow-x-scroll ' >
      {items.map((item, index) => <CarouselItem item={item} />)}
    </div>
  )
}

function CarouselItem({ item }) {
  return (
    <div className='inline-flex mx-2 border-box items-center justify-center h-full'>
      <div className='w-52 h-full px-2 flex  flex-col justify-center items-center'>
        <div className='h-5/6 flex justify-center items-center' >
          <img src={item.image} alt={item.description} className='max-h-36 md:max-w-52 md:max-h-64' />
        </div>
        <div className='h-8 text-xl text-red-800 '>
          ${item.price}
        </div>
      </div>
    </div>
  )
}

export default Carousel