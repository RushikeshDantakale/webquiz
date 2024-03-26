import React from 'react'
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import Main from '../../admin-components/Main'

export default function Dashboard() {
  return (<>
        <DashboardTemplate  component={<Main/>}/>
  </>
  )
}
