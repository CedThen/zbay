import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeBar from './HomeBar';
import SearchContainer from './SearchContainer';

const PageWrapper = ({ children }) => {
  return (
    <div className='bg-white '>
      <div className='md:w-2/3 mx-auto h-screen'>
        <HomeBar />
        <SearchContainer />
        <Outlet />
      </div>
    </div>
  )
}

export default PageWrapper