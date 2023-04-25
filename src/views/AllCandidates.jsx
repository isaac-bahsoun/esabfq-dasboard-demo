import React from "react";
import AllCandidatesTable from "../components/AllCandidatesTable/AllCandidatesTable.jsx";
import PageContainer from '../components/PageContainer/PageContainer.jsx'
import PageHeader from "../elements/PageHeader.jsx";

export default function AllCandidates() {

  return (
    <PageContainer>
         <PageHeader title={"All Candidates"}/>
         <AllCandidatesTable/>
    </PageContainer>
  )
}
