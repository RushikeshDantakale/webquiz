import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  useEffect(() => {
    const startRes = async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/`)
    }
    startRes()
  }, [])

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/admin/login`, data);
      if (response.status === 200) {
        //setting the user into session storage
        sessionStorage.setItem("user", JSON.stringify(response.data.user))
        // Login successful
        toast.success(response.data.message, { position: "top-right" });
        setTimeout(() => {
          navigate("/admin/users");
        }, 3000);
      }
    } catch (error) {
      // Handle network or other errors
      toast.error("An error occurred. Please try again.", { position: "top-right" })
    }
  }

  const changeFormData = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Helmet>
        <title>ReactQuiz - Admin Login</title>
      </Helmet>
      <Navbar sub={"home"} />
      <div className="flex j-center login-outer ">
        <form method='post' onSubmit={(e) => submitData(e)} >
          <div className='rounded-block login shadow shadow-2xl'>
            <h1>Login Here...</h1>
            <p>*For Admin Only..*</p>
            <input type="text" className='border border-1' name='email' onChange={(e) => changeFormData(e)} placeholder='Email' /><br />
            <input type="password" className='border border-1' name='password' onChange={(e) => changeFormData(e)} placeholder='Password' />
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}
