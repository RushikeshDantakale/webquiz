import React from 'react'
import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <>
      <Navbar sub={"home"}/>
      <div className="flex j-center">

      <div className='rounded-block'>
        <h1>Loogin Here</h1>
        <input type="text" placeholder='Enter your email'/>
      </div>

      </div>
    </>
  )
}
