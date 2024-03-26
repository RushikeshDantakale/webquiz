import React from 'react'
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import QuestionsMain from '../../admin-components/QuestionsMain'

export default function Questions() {
  return (<>
    <DashboardTemplate component={<QuestionsMain/>}/>
  </>
  )
}
