import React from 'react'
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import ReportsMain from '../../admin-components/ReportsMain'

export default function Reports() {
  return (<>
    <DashboardTemplate component={<ReportsMain/>} />
  </>
  )
}
