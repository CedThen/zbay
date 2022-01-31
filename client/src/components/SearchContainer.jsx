import React from 'react';
import SearchBar from './SearchBar';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';

const SearchContainer = () => {
  const navHome = useCustomNavigate(routeNames.HOME)
  return (
    <div className='flex flex-row h-20 w-auto bg-blue-200 items-center'>
      <div className='w-1/6 md:text-5xl text-2xl flex items-center justify-center underline cursor-pointer' onClick={navHome}>zbay</div>
      <SearchBar />
      <button className='border-box m-4 w-1/6 h-auto flex items-center justify-center text-xl md:text-3xl bg-red-200'>search</button>
    </div>
  )
}

export default SearchContainer