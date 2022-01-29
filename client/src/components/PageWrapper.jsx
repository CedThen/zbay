import React from 'react';
import HomeBar from './HomeBar';
import SearchContainer from './SearchContainer';

const PageWrapper = ({ children }) => {
  return (
    <div className='bg-white '>
      <div className='md:w-2/3 mx-auto h-screen'>
        <HomeBar />
        <SearchContainer />
        {children}
      </div>
    </div>
  )
}

export default PageWrapper