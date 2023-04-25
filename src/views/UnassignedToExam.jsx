import React from "react";
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import UnassignedExamTable from "../components/UnassignedExamTable/UnassignedExamTable.jsx";
import PageHeader from "../elements/PageHeader.jsx";

export default function UnassignedToExam() {
    
  return (
    <PageContainer>
         <PageHeader title={"Assigned to Training not Exam"}/>
         <UnassignedExamTable/>
    </PageContainer>
  )
}
