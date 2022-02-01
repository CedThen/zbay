import React from 'react';
import BigBanner from './BigBanner';
import { useSelector } from 'react-redux';
import PageWrapper from './PageWrapper';
import Carousel from './Carousel';
import { shuffleArray } from '../services';

const Home = () => {
  const { products, categorizedProducts } = useSelector((state) => state)

  if (!products || !categorizedProducts) return (<div>loading</div>)

  const shuffled = shuffleArray([...products])
  console.log('products', products);
  return (
    <PageWrapper>
      <BigBanner categorizedData={categorizedProducts} />
      <div className='md:my-20  md:text-xl'>
        Today's deals - All with free shipping
        <Carousel items={products} />
      </div>
      <div className='md:my-20  md:text-xl'>
        Recommended for you
        <Carousel items={shuffled} />
      </div>
    </PageWrapper>
  )
}



export default Home