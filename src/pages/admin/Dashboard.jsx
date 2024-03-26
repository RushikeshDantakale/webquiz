import React,{useState} from 'react'
import AdminNavbar from '../../admin-components/AdminNavbar'
import Sidebar from '../../admin-components/Sidebar'
import "../../admin.css";
import Main from '../../admin-components/Main';

export default function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
  <div className='grid-container'>
   <AdminNavbar OpenSidebar={OpenSidebar}/>
   <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
   <Main/>
  </div>
  )
}
