import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {
  const { title, category, description, id, image, price, rating } = item
  return (
    <div className='flex bg-white w-full mb-5 shadow-md rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2xl transition-shadow duration-300' >
      <div className='w-5/12  p-5 dark:bg-white rounded-tl-lg rounded-bl-lg group-hover:transform group-hover:scale-125'>
        <div className='bg-contain bg-no-repeat bg-center w-full h-full' style={{ backgroundImage: `url(${image})` }} ></div>
      </div>
      <div className='w-7/12 p-5'>
        <h1 className='md:text-2xl'>{title}</h1>
        <h3 className='text-gray-400'>{category}</h3>
        <p className='text-red-400 text-xl md:text-4xl mt-4'>${price}</p>
        <div className='mt-4'>{description.substr(0, 100)}</div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  // item: {
  //   category: PropTypes.string,
  //   description: PropTypes.string,
  //   id: PropTypes.number,
  //   image: PropTypes.string,
  //   price: PropTypes.number,
  //   rating: {
  //     rate: PropTypes.number,
  //     count: PropTypes.number,
  //   },
  //   title: PropTypes.string
  // }
}

export default ProductCard