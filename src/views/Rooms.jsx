import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import RoomsTable from '../components/RoomsTable/RoomsTable.jsx'
import PageHeader from '../elements/PageHeader.jsx'

export default function Rooms() {
  return (
    <PageContainer>
        <PageHeader title={"Rooms"}/>
        <RoomsTable/>
    </PageContainer>
  )
}
