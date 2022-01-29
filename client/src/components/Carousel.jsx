import React, { useState } from 'react';
import CarouselItem from './CarouselItem';

const Carousel = ({ items }) => {
  const [viewedItem, setViewedItem] = useState(0);
  return (
    <div className='overflow-hidden w-[400px] border-black border-solid border-2'>
      <div className='flex flex-row'>
        {items.map((item, index) => <CarouselItem key={index} item={item} width={500} />)}
        {/* <CarouselItem item={items[0]} /> */}
      </div>
    </div>
  )
}

export default Carousel