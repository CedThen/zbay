import React from 'react';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { logOut } from '../store/dataStore';
import { useDispatch } from 'react-redux';

const HomeBar = () => {
  const { isLoggedIn, user: { email } } = useSelector((state) => state)
  const navLogin = useCustomNavigate(routeNames.LOGIN)
  const navCart = useCustomNavigate(routeNames.CART)
  const navRegister = useCustomNavigate(routeNames.REGISTER)
  const dispatch = useDispatch();

  return (
    <div className=' w-auto flex flex-row h-12 md:h-8 border-b-2 border-black border-solid justify-between items-center pr-4'>
      <div className=' pl-4'>
        {isLoggedIn ?
          <span className=''>Welcome, {email} <span className='cursor-pointer text-blue-400' onClick={() => dispatch(logOut())} >Logout</span></span> :
          (<div><span className='cursor-pointer text-blue-400 underline' onClick={navLogin}>
            Login</span><span> or </span><span className='cursor-pointer text-blue-400 underline' onClick={navRegister}> Register</span> </div>)}
      </div>
      <div className='flex flex-row h-full'>
        <span className='cursor-pointer px-4' onClick={navCart} ><AiOutlineShoppingCart className='h-7 w-7' /></span>
      </div>
    </div>
  )
}

export default HomeBar;

