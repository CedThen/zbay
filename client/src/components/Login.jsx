import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <div className='md:w-1/2 w-full h-screen bg-gray-200 mx-auto'>
      <div className='mx-auto md:text-5xl text-2xl bg-red-200'>Login</div>
      <form className=''>
        <label>Email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </form>
      email: {email}
      password: {password}
    </div>
  )
}

export default Login