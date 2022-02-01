import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import OtherProducts from './OtherProducts';

function ProductDisplay() {

  const { id } = useParams();
  const item = useSelector((state) => {
    if (!state.products) return null
    const itemIndex = state.products.findIndex(element => element.id === parseInt(id))
    return state.products[itemIndex]
  })
  if (!item) return <div>loading</div>

  const { title, image, price, description, category, rating } = item
  return (
    <div className='w-full flex flex-col border-box mt-16'>
      <div className='flex md:flex-row flex-col'>
        <div className='w-full md:w-3/5 h-64 md:h-96 border-2 border-grey border-solid flex justify-center items-center m-0 p-2  md:m-10'>
          <img src={image} alt={description} className='max-w-full max-h-full' />
        </div>
        <div className='flex flex-col h-full items-center h-64 md:h-96 items-stretch w-full p-5 md:py-20'>
          <div className='w-full text-4xl font-bold bord' >{title}</div>
          <div className='py-5'>Rating: {rating.rate} {rating.count} reviews</div>
          <div className='text-xl h-32 flex flex-row items-center justify-between border-t-2 border-b-2 p-5'>
            <div className='w-1/3 text-center flex flex-row justify-center'>Price: <span className='text-3xl text-red-600 px-4'>${price.toFixed(2)}</span></div>
            <button className='h-16 w-1/2 md:w-1/3 bg-blue-600 text-white rounded-full'>Add to Cart</button>
          </div>
          <div className='text-lg py-10'>
            {description}
          </div>
        </div>
      </div>
      <OtherProducts category={category} />
    </div>);
}

export default ProductDisplay;
