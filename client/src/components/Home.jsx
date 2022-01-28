import React, { useState, useEffect } from 'react';
import { fetcher } from '../apis/'
import HomeBar from './HomeBar';
import ProductCard from './ProductCard'
// display some products
// have search bar

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetcher(setData);
  }, [])

  if (!data) return (<div>loading</div>)

  return (
    <div className='bg-gray-200 dark:bg-gray-800' >
      <div className='md:w-1/2 mx-auto'>
        {/* hello */}
        <HomeBar />
        {data.map((item) => <ProductCard item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Home