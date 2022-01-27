import React, { useState, useEffect } from 'react';
import { fetcher } from '../apis/'

// display some products
// have search bar

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetcher(setData);
  }, [])

  console.log(data)
  return (
    <div>this is the Homef aefawefawasdfaewaf</div>
  )
}

export default Home