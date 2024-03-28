import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import {useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  console.log(import.meta.env.VITE_SERVER , 9);


  const [data , setData] = useState({
    email:"",
    password:""
  })

  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname, 8);

  const submitData =async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/admin/login`, data);
      console.log(response, 21);
  
      if (response.status === 200) {
        // Login successful
          return toast.success(response.data.message, { position: "top-right" });
      
        navigate("/admin/dashboard");
      } else if (response.status === 401) {
        // Unauthorized
        toast.error("Invalid Username or password", { position: "top-right" });
      } else {
        // Other error
        toast.error("An error occurred. Please try again.", { position: "top-right" });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", { position: "top-right" });
    }
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
      <form method='post' onSubmit={(e) => submitData(e)} >
        <div className='rounded-block login'>
          <h1>Login Here...</h1>
          <p>*For Admin Only..*</p>
          <input type="text" name='email' onChange={(e)=>changeFormData(e)} placeholder='Email'/><br />
          <input type="password" name='password' onChange={(e)=>changeFormData(e)} placeholder='Password' />
          <button type='submit'>Login</button>
        </div>
      </form>
      </div>
      <ToastContainer/>
    </>
  )
}
