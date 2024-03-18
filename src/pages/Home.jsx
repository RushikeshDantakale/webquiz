import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

export default function Home() {

  const {pathname} = useLocation();
  console.log(pathname , 8);
  return (<>
    <Navbar sub={"home"}/>
    {pathname}
    </>
  )
}
