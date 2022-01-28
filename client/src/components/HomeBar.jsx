import React from 'react';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';
// todo navigate

const HomeBar = () => {

  const navLogin = useCustomNavigate(routeNames.LOGIN)
  const navCart = useCustomNavigate(routeNames.CART)
  return (
    <div className=' w-auto flex flex-row h-8 border-b-2 border-black border-solid justify-end items-center pr-4'>
      <span className='px-8 cursor-pointer' onClick={navLogin}>Login</span>
      <span className='cursor-pointer' onClick={navCart} >Cart</span>
    </div>
  )
}

export default HomeBar;