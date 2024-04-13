import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {BsFillBellFill , BsFillEnvelopeFill , BsPersonCircle , BsSearch , BsJustify} from 'react-icons/bs';
import "../admin.css"
import  {useNavigate} from "react-router-dom"


export default function AdminNavbar({OpenSidebar}) {

  const [profileOpen , setProfileOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"))[0]
  // console.log(typeof user);
  // const [bellOpen , setBellOpen] = useState(false);
  const navigate = useNavigate()

  const logout = () =>{
    if(confirm("Do You Really Want To End this Session?")){
      sessionStorage.removeItem("user")
      // console.log(sessionStorage.getItem("user"));
      
      navigate("/admin/login")
    }
  }

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
          {/* <div className="bell">
            <BsFillBellFill onClick={() => setBellOpen(!bellOpen)} className='icon'/>
            {bellOpen ? 
            <div className="bell-down">
            <div className="title">
              Notifications &nbsp;   <span>11</span> 
            </div>
              <div className='notifications'>
                <li>dsf</li>
              </div>
            </div>
            :
            null
            }
             &nbsp;
          </div> */}
            {/* <BsFillEnvelopeFill className='icon'/> */}
            <div className='profile'>
              <span onClick={()=> setProfileOpen(!profileOpen)}>{user.username}</span> <BsPersonCircle onClick={()=> setProfileOpen(!profileOpen)} className='icon profile-icon'/>
              {
                profileOpen ?  
                <div className='profile-down'>
                  <Link to="/admin/profile"><li>Profile</li></Link>
                  <li onClick={logout}>Logout</li>
                </div> :
                 null
              }
           </div>
        </div>
    </header>
  
  )
}
