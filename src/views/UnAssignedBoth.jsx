import React from "react";
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import UnassignedBothTable from "../components/UnassignedBothTable/UnassigneBothTable.jsx";
import PageHeader from "../elements/PageHeader.jsx";

export default function UnassignedToBoth() {
    
  return (
    <PageContainer>
         <PageHeader title={"Unassigned both Training & Exam"}/>
         <UnassignedBothTable/>
    </PageContainer>
  )
}
