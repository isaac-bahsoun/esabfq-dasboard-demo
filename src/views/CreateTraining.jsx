import React from 'react'
import CreateTrainingForm from '../components/CreateTrainingForm/CreateTrainingForm.jsx'
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function CreateTraining() {
  return (
    <PageContainer>
        <PageHeader title={"Create New Training"} />
        <CreateTrainingForm/>
    </PageContainer>
  )
}
