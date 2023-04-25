import React from 'react'
import ManageTrainingsTable from '../components/ManageTrainingTable/ManageTrainingsTable.jsx'
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function ManageTraining() {
  return (
    <PageContainer>
        <PageHeader title={"Manage Trainings"}/>
        <ManageTrainingsTable/>
    </PageContainer>
  )
}
