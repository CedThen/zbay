import React from 'react';
import HomeBar from './HomeBar';
import SearchContainer from './SearchContainer';

const PageWrapper = ({ children }) => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='md:w-3/5 mx-auto'>
        <HomeBar />
        <SearchContainer />
        {children}
      </div>
    </div>
  )
}

export default PageWrapper