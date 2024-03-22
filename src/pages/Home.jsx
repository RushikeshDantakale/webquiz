import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function Home() {

  const {pathname} = useLocation();
  console.log(pathname , 8);
  return (<>
  <Helmet>
   <title>ReactQuiz - Home</title>
  </Helmet>
    <Navbar sub={"home"}/>
    {pathname}
    </>
  )
}
