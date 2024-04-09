import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BsFillBellFill , BsFillEnvelopeFill , BsPersonCircle , BsSearch , BsJustify} from 'react-icons/bs';
import "../admin.css"


export default function AdminNavbar({OpenSidebar}) {

  const [profileOpen , setProfileOpen] = useState(false);
  const [bellOpen , setBellOpen] = useState(false);

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
            <BsFillBellFill onClick={() => setBellOpen(!bellOpen)} className='icon'/>
            {bellOpen ? 
            <div className="bell-down">
            <div className="title">
              Notifications &nbsp;   <span>11</span> 
            </div>
              <div className='notifications'>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
                <li>dsf</li>
              </div>
            </div>
            :
            null
            }
             &nbsp;
          </div>
            {/* <BsFillEnvelopeFill className='icon'/> */}
            <div className='profile'>
              <span onClick={()=> setProfileOpen(!profileOpen)}>Rushikesh</span> <BsPersonCircle onClick={()=> setProfileOpen(!profileOpen)} className='icon profile-icon'/>
              {
                profileOpen ?  
                <div className='profile-down'>
                  <Link to="/admin/profile"><li>Profile</li></Link>
                  <li>Settings</li>
                  <li>Logout</li>
                </div> :
                 null
              }
           </div>
        </div>
    </header>
  
  )
}
