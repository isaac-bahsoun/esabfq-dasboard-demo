import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import PerFirmTable from '../components/PerFirmTable/PerFirmTable.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function PerFirm() {
  return (
    <PageContainer>
        <PageHeader title={"Candidates Per Firm(s)"}/>
        <PerFirmTable/>
    </PageContainer>
  )
}
