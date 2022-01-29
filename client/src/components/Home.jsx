import React, { useState, useEffect } from 'react';
import { fetcher, testUser } from '../apis/'

import PageWrapper from './PageWrapper';
import ProductCard from './ProductCard'
// display some products
// have search bar

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetcher(setData);
    // testUser();
  }, [])

  if (!data) return (<div>loading</div>)

  return (
    <PageWrapper>
      {data.map((item) => <ProductCard item={item} key={item.id} />)}
    </PageWrapper>
  )
}

export default Home