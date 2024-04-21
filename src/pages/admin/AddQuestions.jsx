import React from 'react'
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import AddQuestionsMain from '../../admin-components/AddQuestionsMain'

export default function AddQuestions() {
  return (
    <>
      <DashboardTemplate component={<AddQuestionsMain/>}/>
    </>
  )
}
