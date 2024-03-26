import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import {useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function Login() {

  const [data , setData] = useState({
    email:"",
    password:""
  })

  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname, 8);

  const submitData = (e) =>{
    e.preventDefault();
    navigate("/admin/dashboard");
  }

  const changeFormData = (e) => {
    e.preventDefault();
    setData({...data , [e.target.name] : e.target.value});
    console.log(data , 24);
  }

  return (
    <>
    <Helmet>
      <title>ReactQuiz - Admin Login</title>
    </Helmet>
      <Navbar sub={"home"}/>
      <div className="flex j-center login-outer">
      <form method='post' onSubmit={(e) => submitData(e)} action="">
        <div className='rounded-block login'>
          <h1>Login Here...</h1>
          <p>*For Admin Only..*</p>
          <input type="text" name='email' onChange={(e)=>changeFormData(e)} placeholder='Email'/><br />
          <input type="password" name='password' onChange={(e)=>changeFormData(e)} placeholder='Password' />
          <button type='submit'>Login</button>
        </div>
      </form>
      </div>
    </>
  )
}
