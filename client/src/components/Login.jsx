import React, { useState } from 'react';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navHome = useCustomNavigate(routeNames.HOME)

  return (
    <div className='md:w-1/4 w-5/6 h-screen bg-white mx-auto flex flex-col justify-center items-center'>
      <div className='absolute md:top-10 md:left-10 top-5 text-5xl underline cursor-pointer' onClick={navHome}>zbay</div>
      <div className='mx-auto md:text-5xl text-2xl flex flex-col justify-center items-center'>
        Hello
        <div className='text-base my-10'>Sign into zbay or make an account</div>
      </div>
      <form className='flex justify-center items-center flex-col w-full'>
        <label className='w-full  flex justify-center items-center'>
          <input type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            className='border-box border-grey border-2 border-solid w-5/6 h-12 rounded-md pl-3 text-lg m-5 shadow-black shadow-sm' />
        </label>
        <label className='w-full flex justify-center items-center'>
          <input type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            className='border-box border-grey border-2 border-solid w-5/6 h-12 rounded-md pl-3 text-lg m-5  shadow-black shadow-sm' />
        </label>
        <button className='bg-blue-600 text-white rounded-lg h-12 w-5/6 text-xl my-5 active:bg-blue-800 shadow-black shadow-sm'>Submit</button>
      </form>

    </div>
  )
}

export default Login