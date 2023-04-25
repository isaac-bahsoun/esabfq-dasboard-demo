import React from "react";
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import UnassignedBoxes from "../components/UnassignedOptions/UnassignedBoxes.jsx";
import PageHeader from "../elements/PageHeader.jsx";

export default function Unassigned() {
  return (
    <PageContainer>
         <PageHeader title={"Unassigned Candidates"}/>
         <UnassignedBoxes/>
    </PageContainer>
  )
}
