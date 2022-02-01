import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductWrapper from './ProductWrapper';


function Search() {
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get('q').split(' ')
  const products = useSelector(state => {
    if (!state.products) return null;

    const res = state.products.filter((product) =>
      keywords.some((word) => product.title.toLowerCase().includes(word.toLowerCase()) || product.description.toLowerCase().includes(word.toLowerCase()))
    )
    return res
  })
  console.log('products', products);
  if (!products) return <div>loading</div>
  // normally make another req to server to find stuff but im just gonna filter the products
  return (
    <div className='w-full mt-10'>
      <div>

      </div>
      <div>
        {products.map((product) => <SearchItem key={product.id} item={product} />)}
      </div>
    </div>
  );
}



function SearchItem({ item }) {
  const { id, image, description, title, price } = item
  return (
    <div className='w-full h-48 flex flex-row m-5 border-2 border-brey border-solid box-border'>
      <ProductWrapper id={id} className='w-48 p-3 h-full cursor-pointer'>
        <img src={image} alt={description} className='w-auto h-full' />
      </ProductWrapper>
      <div className='pl-10'>
        <ProductWrapper id={id} className='cursor-pointer text-2xl' >{title}</ProductWrapper>
        {/* <div className='text-sm'>{description}</div> */}
        <p className='text-red-600 text-xl'>${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Search;
