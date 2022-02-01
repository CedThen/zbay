import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';


function OtherProducts({ category }) {
  const categorizedProducts = useSelector((state) => state.categorizedProducts[category])
  console.log('categorizedProducts', categorizedProducts);
  return (
    <div className='w-full '>
      <div className='text-2xl'>Similar products</div>
      <Carousel items={categorizedProducts} />
    </div>);
}

export default OtherProducts;
