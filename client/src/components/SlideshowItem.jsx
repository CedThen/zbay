import React from 'react';
import ProductWrapper from './ProductWrapper';
// todo onclick redirecting 

const SlideshowItem = ({ category }) => {
  return (
    <div className='flex flex-row w-5/6 md:w-full h-full '>
      <div className='invisible w-0 md:visible md:w-1/3 h-full flex items-center text-xl md:text-3xl px-4'>Check out {category[0].category}!</div>
      <div className='w-full md:w-2/3 h-full flex flex-row justify-around mx-auto'>
        <ProductPic item={category[0]} />
        <ProductPic item={category[1]} />
        <ProductPic item={category[2]} />
      </div>
    </div>
  )
}

function ProductPic({ item }) {
  return (
    <ProductWrapper id={item.id} className='box-border h-full max-w-xs md:max-w-md mx-2 flex justify-center cursor-pointer'>
      <img src={item.image} alt={item.description} className='w-36 my-auto max-h-full p-1' />
    </ProductWrapper>
  )
}

export default SlideshowItem