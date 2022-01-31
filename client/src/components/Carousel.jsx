import React from 'react';
import ProductWrapper from './ProductWrapper';

const Carousel = ({ items }) => {
  return (
    <div className=' w-full h-1/4 my-5 md:h-1/3 flex flex-row overflow-x-scroll ' >
      {items.map((item, index) => <CarouselItem item={item} key={index} />)}
    </div>
  )
}

function CarouselItem({ item }) {
  return (

    <ProductWrapper id={item.id} className='inline-flex mx-2 border-box items-center justify-center h-full cursor-pointer'>
      <div className='w-52 h-5/6 px-2 flex  flex-col justify-center items-center'>
        <div className='h-5/6 flex justify-center items-center' >
          <img src={item.image} alt={item.description} className='max-h-36 md:max-w-52 md:max-h-64' />
        </div>
        <div className='h-8 text-xl text-red-800 '>
          ${item.price}
        </div>
      </div>
    </ProductWrapper>

  )
}

export default Carousel