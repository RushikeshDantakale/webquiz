import React from 'react'
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import ViewQuestionSetMain from '../../admin-components/ViewQuestionSetMain'

export default function ViewQuestionSet() {
  return (<>
    <DashboardTemplate component={<ViewQuestionSetMain/>}/>
  </>)
}
