import React from 'react';

const SearchBar = ({ searchParams, setSearchParams }) => {
  return (
    <div className='flex flex-row h-20 w-full flex items-center '>
      <input
        placeholder=' Search for anything'
        type='search'
        className='p-2 w-full h-10 border-2 border-black border-solid focus:border-0'
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)} />
    </div>
  )
}

export default SearchBar