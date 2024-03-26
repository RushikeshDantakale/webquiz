import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
from "react-icons/bs"
import "../admin.css"
import { Link, useLocation } from 'react-router-dom'



export default function Sidebar({openSidebarToggle, OpenSidebar}) {
    
    const {pathname} = useLocation();
    const active = {backgroundColor:"#dadada"};
    const nonActive = {border:"none"};

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div  className='sidebar-title'>
            <div className='sidebar-brand logo'>ReactJS<span className='logo-inner'>Quiz</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <Link className='no-underline' to="/admin/dashboard">
                <li className='sidebar-list-item' style={pathname == "/admin/dashboard" ? active : nonActive}>
                    <a href="">
                        <BsGrid1X2Fill className='icon icon-head'/> Dashboard
                    </a>
                </li>
            </Link>
            <Link className='no-underline' to="/admin/users">
                <li className='sidebar-list-item' style={pathname == "/admin/users" ? active : nonActive}>
                    <a href="">
                        <BsPeopleFill className='icon icon-head'/> Users
                    </a>
                </li>
            </Link>
            <Link className='no-underline' to="/admin/questions">
                <li className='sidebar-list-item' style={pathname == "/admin/questions" ? active : nonActive}>
                    <a href="">
                        <BsListCheck className='icon icon-head'/> Questions
                    </a>
                </li>
            </Link>
            <Link className='no-underline' to="/admin/reports">
                <li className='sidebar-list-item' style={pathname == "/admin/reports" ? active : nonActive}>
                    <a href="">
                        <BsMenuButtonWideFill className='icon icon-head'/> Reports
                    </a>
                </li>
            </Link>
            {/* <Link className='no-underline' to="/admin/settings">
                <li className='sidebar-list-item' style={pathname == "/admin/settings" ? active : nonActive}>
                    <a href="">
                        <BsFillGearFill className='icon icon-head'/> Settings
                    </a>
                </li>
            </Link> */}
        </ul>
    </aside>
  )
}
