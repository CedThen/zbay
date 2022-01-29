import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <div className='w-500px h-500px border-2 border-pink border-solid whitespace-nowrap object-cover'>
      <img src={item.image} alt={item.description} />
    </div>
  )
}

export default CarouselItem