import React, { useState } from 'react'
import {BsFillBellFill , BsFillEnvelopeFill , BsPersonCircle , BsSearch , BsJustify} from 'react-icons/bs';
import "../admin.css"


export default function AdminNavbar({OpenSidebar}) {

  const [profileOpen , setProfileOpen] = useState(false);

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
          <div className="bell">
            <BsFillBellFill className='icon'/> &nbsp;
          </div>
            {/* <BsFillEnvelopeFill className='icon'/> */}
            <div className='profile'>
              <span onClick={()=> setProfileOpen(!profileOpen)}>Rushikesh</span> <BsPersonCircle onClick={()=> setProfileOpen(!profileOpen)} className='icon profile-icon'/>
              {profileOpen ?  <div className='profile-down'>
               
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
      
              </div> : null}
           </div>
        </div>
    </header>
  
  )
}
