import React, { useState, useEffect } from 'react';
import { fetcher, testUser } from '../apis/'
import BigBanner from './BigBanner';
// import SlideShow from './Slideshow';

import PageWrapper from './PageWrapper';
import ProductCard from './ProductCard'
import Carousel from './Carousel';
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
      <div className='md:my-20  md:text-xl'>
        Today's deals - All with free shipping
        <Carousel items={data} />
      </div>
      <div className='md:my-20  md:text-xl'>
        Recommended for you
        <Carousel items={data} />
      </div>
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