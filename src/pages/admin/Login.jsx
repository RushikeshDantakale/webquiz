import React from 'react'
import Navbar from '../../components/Navbar'

export default function Login() {
  return (
    <>
      <Navbar sub={"home"}/>
      <div className="flex j-center login-outer">

      <div className='rounded-block login'>
        <h1>Login Here...</h1>
        <p>*For Admin Only..*</p>
        <input type="text" placeholder='Email'/><br />
        <input type="password" placeholder='Password' />
        <button>Login</button>
      </div>

      </div>
    </>
  )
}
