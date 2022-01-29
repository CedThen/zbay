import React, { useState, useEffect } from 'react';
import { fetcher, testUser } from '../apis/'
import BigBanner from './BigBanner';
// import SlideShow from './Slideshow';

import PageWrapper from './PageWrapper';
import ProductCard from './ProductCard'
// display some products
// have search bar

const Home = () => {
  const [data, setData] = useState()
  const [categorizedData, setCategorizedData] = useState()

  useEffect(() => {
    fetcher(setData);
  }, [])

  useEffect(() => {
    // set categorized data
    categorize(data, setCategorizedData)
  }, [data])




  if (!data || !categorizedData) return (<div>loading</div>)
  // scrollable row of items
  // row of categories
  return (
    <PageWrapper>
      <BigBanner categorizedData={categorizedData} />
      {/* {data.map((item) => <ProductCard item={item} key={item.id} />)} */}
      {/* <SlideShow items={data} /> */}
    </PageWrapper>
  )
}

function categorize(data, setCategorizedData) {
  if (!data) return;
  let categories = {};
  data.forEach((item) => {
    let category = item.category;
    if (categories[category]) categories[category] = [...categories[category], item]
    else categories[category] = [item]
  })
  setCategorizedData(categories)
}

export default Home