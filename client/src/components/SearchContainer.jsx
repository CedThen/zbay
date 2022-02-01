import React, { useState } from 'react';
import SearchBar from './SearchBar';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';
import { useNavigate, generatePath, createSearchParams } from 'react-router-dom';

const SearchContainer = () => {
  const [searchParams, setSearchParams] = useState('');
  const navHome = useCustomNavigate(routeNames.HOME);

  const navigate = useNavigate();

  function handleSubmit() {
    navigate({
      pathname: routeNames.SEARCH,
      search: `?${createSearchParams({
        q: searchParams
      })}`
    })
  }

  return (
    <div className='flex flex-row h-20 w-auto bg-blue-200 items-center'>
      <div className='w-1/6 md:text-5xl text-2xl flex items-center justify-center underline cursor-pointer' onClick={navHome}>zbay</div>
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
      <button className='border-box m-4 w-1/6 h-auto flex items-center justify-center text-xl md:text-3xl bg-red-200' onClick={handleSubmit} >Search</button>
    </div>
  )
}

export default SearchContainer