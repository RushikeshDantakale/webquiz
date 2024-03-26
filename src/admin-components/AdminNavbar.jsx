import React from 'react'
import {BsFillBellFill , BsFillEnvelopeFill , BsPersonCircle , BsSearch , BsJustify} from 'react-icons/bs';
import "../admin.css"


export default function AdminNavbar({OpenSidebar}) {
  return (
  
   <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
            <input type="text" placeholder='Search'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/> &nbsp;
            {/* <BsFillEnvelopeFill className='icon'/> */}
           <span>Rushikesh Dantakale</span> <BsPersonCircle className='icon profile-icon'/>
        </div>
    </header>
  
  )
}
