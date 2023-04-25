import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import TopBar from '../TopBar/TopBar.jsx'
import { BodyContainer, Container, PageContent } from './PageContainerStyle.js'

export default function PageContainer({children}) {
  return (
    <Container>
      <TopBar/>
      
      <BodyContainer>
      <Sidebar/>
      <PageContent>
        {children}
      </PageContent>
      </BodyContainer>  
    </Container>
  )
}
