import React from 'react'
import Navbar from '../../components/Navbar'

export default function Login() {
  return (
    <>
      <Navbar sub={"home"}/>
      <div className="flex j-center login-outer">

      <div className='rounded-block login'>
        <h1>Login Here</h1>
        <input type="text" placeholder='Enter your email'/><br />
        <input type="password" placeholder='Enter your password' />
        <button>Login</button>
      </div>

      </div>
    </>
  )
}
