import React, { useState } from 'react';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';

function Register() {
  const [email, setEmail] = useState({ value: '', isValid: true });
  const [password, setPassword] = useState({ value: '', isValid: true });
  const navHome = useCustomNavigate(routeNames.HOME)

  function handleSubmit(e) {

    e.preventDefault()
    if (email.value.length === 0) setEmail({ ...email, isValid: false })
    if (password.value.length === 0) setPassword({ ...password, isValid: false })

  }

  function onInput(input, stateCallback) {
    stateCallback((state) => ({ isValid: true, state, value: input }))
  }

  return (

    <div className='md:w-1/4 w-5/6 h-screen bg-white mx-auto flex flex-col justify-center items-center'>
      <div className='absolute md:top-10 md:left-10 top-5 text-5xl underline cursor-pointer' onClick={navHome}>zbay</div>
      <div className='text-4xl pb-12'>Create an account</div>
      <form className='flex justify-center items-center flex-col w-full' onSubmit={handleSubmit}>
        <label className='w-full  flex justify-center items-center'>
          <input type='email'
            autoComplete='on'
            value={email.value}
            onChange={(e) => onInput(e.target.value, setEmail)}
            placeholder='email'
            className={`border-box border-grey border-2 border-solid ${!email.isValid && 'border-red-400'}  w-5/6 h-12 rounded-md pl-3 text-lg shadow-black shadow-sm `} />
        </label>
        {email.isValid ? <br className='my-2' /> : <p className='my-2'> Please enter your email</p >}
        <label className='w-full flex justify-center items-center'>
          <input type='password'
            autoComplete='off'
            value={password.value}
            onChange={(e) => onInput(e.target.value, setPassword)}
            placeholder='password'
            className={`border-box border-grey border-2 border-solid ${!password.isValid && 'border-red-400'}  w-5/6 h-12 rounded-md pl-3 text-lg shadow-black shadow-sm `} />
        </label>
        {password.isValid ? <br className='my-2' /> : <p className='my-2'> Please enter a secure password</p >}
        <button className='bg-blue-600 text-white rounded-lg h-12 w-5/6 text-xl my-5 active:bg-blue-800 shadow-black shadow-sm' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Register;
