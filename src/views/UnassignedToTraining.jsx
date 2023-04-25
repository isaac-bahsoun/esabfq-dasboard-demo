import React from "react";
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import UnassignedTrainingTable from "../components/UnassigneTrainingTale/UnassignedTrainingTable.jsx";
import PageHeader from "../elements/PageHeader.jsx";

export default function UnassignedToTraining() {
    
  return (
    <PageContainer>
         <PageHeader title={"Unassigned to Training"}/>
         <UnassignedTrainingTable/>
    </PageContainer>
  )
}
