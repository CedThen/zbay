import React from 'react';
import ProductWrapper from './ProductWrapper';

const Carousel = ({ items }) => {
  return (
    <div className=' w-full h-64 my-5 md:h-1/3 flex flex-row overflow-x-scroll' >
      {items.map((item, index) => <CarouselItem item={item} key={index} />)}
    </div>
  )
}

function CarouselItem({ item }) {
  const { id, price, title, image, description } = item
  return (
    <ProductWrapper id={id} className='flex flex-col mx-2 border-box items-center justify-center h-full cursor-pointer'>
      <div className='w-52 h-56 px-2 flex  flex-col justify-center items-center' >
        <div className='h-5/6 flex justify-center items-center' >
          <img src={image} alt={description} className='max-h-36 md:max-w-52 md:max-h-56' />
        </div>
      </div>
      <div className='h-1/6  '>
        <div className='text-sm'>{title}</div>
        <div className=' text-xl text-red-800'>${price}</div>
      </div>
    </ProductWrapper>

  )
}

export default Carousel