import React from 'react'
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import ProfileMain from '../../admin-components/ProfileMain'

export default function Profile() {
  return (<>
    <DashboardTemplate  component={<ProfileMain/>}/>
  </>
  )
}
