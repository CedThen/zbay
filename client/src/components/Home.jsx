import React from 'react';
import BigBanner from './BigBanner';
import { useSelector } from 'react-redux';
import PageWrapper from './PageWrapper';
import Carousel from './Carousel';

const Home = () => {
  const { products, categorizedProducts } = useSelector((state) => state)

  if (!products || !categorizedProducts) return (<div>loading</div>)

  return (
    <PageWrapper>
      <BigBanner categorizedData={categorizedProducts} />
      <div className='md:my-20  md:text-xl'>
        Today's deals - All with free shipping
        <Carousel items={products} />
      </div>
      <div className='md:my-20  md:text-xl'>
        Recommended for you
        <Carousel items={products} />
      </div>
    </PageWrapper>
  )
}



export default Home