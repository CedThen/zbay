import React from 'react';
import Slideshow from './Slideshow'
import SlideshowItem from './SlideshowItem'

const BigBanner = ({ categorizedData }) => {

  return (
    <div className='md:h-1/4 h-1/6 w-auto bg-white my-2 flex justify-center items-center md:text-9xl text-4xl'>
      <Slideshow>
        {Object.keys(categorizedData).map((category, index) =>
          (<SlideshowItem category={categorizedData[category]} key={index} />)
        )}
      </Slideshow>
    </div>
  )
}

export default BigBanner