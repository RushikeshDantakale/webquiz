import React from 'react'
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({sub}) {
  const {pathname} = useLocation();
  return (
    <div className='w-100 navbar'>
      <div className='logo'>ReactJS<span className='logo-inner'>Quiz</span></div>
      {
        sub=="home"
        ?
        <div className='nav-outer'>
            <NavLink to="/">
              <div className={`nav-items ${pathname == "/" ? "navbar-active" : ""}`}>Home</div>
            </NavLink>

            <NavLink to="/user/contact">
              <div className={`nav-items ${pathname == "/user/contact" ? "navbar-active" : ""}`}>Contact Us</div>
            </NavLink>
            <NavLink to="/user/register">
              <div className={`nav-items ${pathname == "/user/register" ? "navbar-active" : ""}`}>Register & Go!</div>
            </NavLink>
       </div>
        :
        <div className='nav-outer'>
            <div className='nav-items count'>
            Count&nbsp;  : &nbsp;  4/10
            </div>
            <div className='nav-items count'>
            Time Remaining <span className='count-inner'> 10 : 00 </span> 
            </div>
       </div>
      }
       
    </div>
  )
}
