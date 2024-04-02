import React from 'react'
import CreateQuestionSetMain from '../../admin-components/CreateQuestionSetMain'
import DashboardTemplate from '../../admin-components/DashboardTemplate'

export default function CreateQuestionSet() {
  return (
    <DashboardTemplate component={<CreateQuestionSetMain/>}/>
  )
}
