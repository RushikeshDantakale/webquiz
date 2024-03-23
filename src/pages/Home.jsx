import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function Home() {

  const { pathname } = useLocation();
  console.log(pathname, 8);
  return (<>
    <Helmet>
      <title>ReactQuiz - Home</title>
    </Helmet>
    <Navbar sub={"home"} />
    <div className='home-container'>
      <div className='home-left'>
       <div className="inner">
        <div className="title">
          Learn <br />
          new concepts <br />
          for each question
        </div>

        <div className="description">
        We help you prepare for exams and quizes !
        </div>
        <Link to="/user/register">
        <button>
          Start Solving
        </button>
        </Link>

        </div>

      </div>
      <div className='home-right'> <img className='right-img' src="./home-right.svg" /> </div>
    </div>
  </>
  )
}
