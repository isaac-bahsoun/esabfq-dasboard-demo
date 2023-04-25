import React from 'react'
import CreateExamForm from '../components/CreateExamForm/CreateExamForm.jsx'
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function CreateExam() {
  return (
    <PageContainer>
        <PageHeader title={"Create New Exam"} />
        <CreateExamForm/>
    </PageContainer>
  )
}
