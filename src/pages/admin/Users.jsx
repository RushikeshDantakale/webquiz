import React from 'react'
import "../../admin.css"
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import UsersMain from '../../admin-components/UsersMain'


export default function Users() {
  return (<>
    <DashboardTemplate component={<UsersMain/>}/>
  </>
  )
}
