import React from 'react';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';
import { AiOutlineShoppingCart } from 'react-icons/ai'
// todo navigate

const HomeBar = () => {

  const navLogin = useCustomNavigate(routeNames.LOGIN)
  const navCart = useCustomNavigate(routeNames.CART)
  const navRegister = useCustomNavigate(routeNames.REGISTER)
  return (
    <div className=' w-auto flex flex-row h-12 md:h-8 border-b-2 border-black border-solid justify-between items-center pr-4'>
      <div className=' pl-4'><span className='cursor-pointer text-blue-400 underline' onClick={navLogin}>Login</span> or
        <span className='cursor-pointer text-blue-400 underline' onClick={navRegister}> Register</span>
      </div>
      <span className='cursor-pointer pr-4' onClick={navCart} ><AiOutlineShoppingCart className='h-7 w-7' /></span>
    </div>
  )
}

export default HomeBar;