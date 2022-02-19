import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';


function OtherProducts({ category }) {
  const categorizedProducts = useSelector((state) => state.categorizedProducts[category])
  return (
    <div className='w-full '>
      <div className='text-2xl md:pl-0 pl-7'>Similar products</div>
      <Carousel items={categorizedProducts} />
    </div>);
}

export default OtherProducts;
