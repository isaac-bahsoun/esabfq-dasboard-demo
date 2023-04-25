import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import RecentApplicationsTable from '../components/RecentApplicationsTable/RAT.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function RecentApplications() {
  return (
    <PageContainer>
        <PageHeader title={"Recent Applications"}/>
        <RecentApplicationsTable/>
    </PageContainer>
  )
}
