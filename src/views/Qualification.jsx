import React from 'react'

import PageContainer from '../components/PageContainer/PageContainer.jsx'
import QualificationTable from '../components/QualificatonTable/QualificationTable.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function Qualifications() {
  return (
    <PageContainer>
        <PageHeader title={"Qualifications"}/>
        <QualificationTable/>
    </PageContainer>
  )
}
