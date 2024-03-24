import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default function Register() {


    const [email , setEmail] = useState(null)
    const navigate =useNavigate();

    const changeEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const sendEmail = (e) =>{
        e.preventDefault()
        console.log(email , 11)
        navigate("/user/quiz")

    }
  return (<>
      <Helmet>
        <title>Register Page - ReactQuiz</title>
      </Helmet>
  <Navbar sub={"home"}/>
    <div className='w-100 flex  mt-4 j-center contact-outer'>
        <div className='w-50 contact bg-white'>
    <form onSubmit={(e)=>sendEmail(e)} method='post'>
            <h1>Register with email & Go! </h1>
            <label htmlFor="email">Enter Your Email here!</label>
            <br />
            <input type="email" onChange={(e)=>changeEmail(e)} name="email" id='email' placeholder='Enter Email' />
            <br />
            <button type='submit' className='btn btn-next'>Submit</button>
    </form>
        </div>
    </div>
  </>)
}
