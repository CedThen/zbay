import React, { useState } from 'react';

// might implement redux to hold this search term??
// 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='flex flex-row h-20 w-2/3 flex items-center '>
      <input
        placeholder=' Search for anything'
        type='search'
        className='p-2 w-full h-10 border-2 border-black border-solid focus:border-0'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  )
}

export default SearchBar