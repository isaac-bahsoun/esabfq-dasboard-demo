import React from 'react'
import FirmTable from '../components/FirmsTable/FirmsTableNew.jsx'
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function Firms() {
  return (
    <PageContainer>
        <PageHeader title={"Firms"}/>
        <FirmTable/>
    </PageContainer>
  )
}
