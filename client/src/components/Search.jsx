import React, { useState } from 'react';
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
  const [sortState, setSortState] = useState('relevance')
  const [sortDirection, setSortDirection] = useState('');

  if (!products) return <div>loading</div>

  const sortedProducts = sortState === 'price' ? products.sort((a, b) => {
    if (sortDirection === 'ascending') return a.price - b.price
    return b.price - a.price
  }) : products

  return (
    <div className='w-full mt-10 flex flex-row'>
      <div className='w-1/6'>
        <Sortby sortStates={{ sortState, setSortState }} sortDirections={{ sortDirection, setSortDirection }} />
      </div>
      <div className='w-5/6'>
        {sortedProducts.map((product) => <SearchItem key={product.id} item={product} />)}
      </div>
    </div>
  );
}

function Sortby({ sortStates, sortDirections }) {
  return (
    <div className='w-full'>
      <p className='font-bold text-xl'>Sort by:</p>
      <br />
      <div className='w-full'>
        <div onChange={(e) => sortStates.setSortState(e.target.value)}>
          <input type="radio" id="relevance" defaultChecked={sortStates.sortState === 'relevance'}
            name="type" value="relevance" />
          <label className='text-xl p-5' value="relevance" onClick={(e) => console.log('clicked')}>Relevance</label>
          <br />
          <input type="radio" id="Price" defaultChecked={sortStates.sortState === 'price'}
            name="type" value="price" />
          <label className='text-xl p-5'>Price</label>
        </div>
        <br />
        <div onChange={(e) => sortDirections.setSortDirection(e.target.value)}>
          <input type="radio" id="ascending" defaultChecked={sortDirections.sortDirection === 'ascending'}
            name='direction' value="ascending" />
          <label className='text-xl p-5'>Ascending</label>
          <br />
          <input type="radio" id="relevance" defaultChecked={sortDirections.sortDirection === 'descending'}
            name='direction' value="descending" />
          <label className='text-xl p-5'>Descending</label>
        </div>
      </div >
    </div>
  )
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
