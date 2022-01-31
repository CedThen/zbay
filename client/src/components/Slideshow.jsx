import React, { useCallback, useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


const Carousel = ({ children }) => {
  const [viewedItem, setViewedItem] = useState(0);
  const viewNext = useCallback(() => viewedItem < children.length - 1 ? setViewedItem(viewedItem + 1) : setViewedItem(0), [viewedItem, setViewedItem, children.length])
  const viewPrevious = () => viewedItem > 0 ? setViewedItem(viewedItem - 1) : setViewedItem(children.length - 1)
  useEffect(() => {
    const interval = setInterval(viewNext, 5000);
    return () => clearInterval(interval)
  }, [viewedItem, viewNext])


  return (
    <div className='flex flex-row h-full w-full justify-center items-center group'>

      <FaChevronLeft onClick={viewPrevious} className='group-hover:visible invisible cursor-pointer w-4 md:w-8 relative left-0' />
      {children[viewedItem]}
      <FaChevronRight onClick={viewNext} className='group-hover:visible invisible cursor-pointer w-4 md:w-8 relative right-0' />

    </div>
  )
}

export default Carousel