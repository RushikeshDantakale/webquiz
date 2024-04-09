import React,{useState,useContext,useEffect} from 'react'
import DashboardTemplate from '../../admin-components/DashboardTemplate'
import EditQuestionMain from '../../admin-components/EditQuestionMain'

export default function EditQuestion() {
  return (
    <>
        <DashboardTemplate component={<EditQuestionMain/>} />
    </>
  )
}
