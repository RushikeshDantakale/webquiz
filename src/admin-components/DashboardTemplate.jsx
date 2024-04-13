import React,{useState} from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import "../admin.css"

export default function DashboardTemplate({component}) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
  <div className='grid-container'>
   <AdminNavbar OpenSidebar={OpenSidebar}/>
   <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
   <main className='main-container'>
   {component}
   </main>
  </div>
  )
}
