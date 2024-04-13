import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
from "react-icons/bs"
import "../admin.css"
import { Link, useLocation } from 'react-router-dom'



export default function Sidebar({openSidebarToggle, OpenSidebar}) {
    
    const {pathname} = useLocation();
    const question = pathname.startsWith('/admin/question');
    const user = pathname.startsWith('/admin/users');
    // const question = location.pathname.startsWith('/admin/question/');
    const active = {backgroundColor:"#dadada" ,boxShadow : "inset -2px 0 0 0 red" };
    const nonActive = {border:"none"};

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div  className='sidebar-title'>
            <div className='sidebar-brand logo'>ReactJS<span className='logo-inner'>Quiz</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            {/* <Link className='no-underline' to="/admin/dashboard">
                <li className='sidebar-list-item' style={pathname == "/admin/dashboard" ? active : nonActive}>
                   
                        <BsGrid1X2Fill className='icon icon-head'/> Dashboard
                    
                </li>
            </Link> */}
            <Link className='no-underline' to="/admin/users">
                <li className='sidebar-list-item' style={user ? active : nonActive}>
                  
                        <BsPeopleFill className='icon icon-head'/> Users
                    
                </li>
            </Link>
            <Link className='no-underline' to="/admin/questions">
                <li className='sidebar-list-item' style={question ? active : nonActive}>
                  
                        <BsListCheck className='icon icon-head'/> Questions
                    
                </li>
            </Link>
            {/* <Link className='no-underline' to="/admin/reports">
                <li className='sidebar-list-item' style={pathname == "/admin/reports" ? active : nonActive}>
                  
                        <BsMenuButtonWideFill className='icon icon-head'/> Reports
                    
                </li>
            </Link> */}
            {/* <Link className='no-underline' to="/admin/settings">
                <li className='sidebar-list-item' style={pathname == "/admin/settings" ? active : nonActive}>
                  
                        <BsFillGearFill className='icon icon-head'/> Settings
                    
                </li>
            </Link> */}
        </ul>
    </aside>
  )
}
