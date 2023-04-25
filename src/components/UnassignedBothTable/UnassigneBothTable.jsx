import React, { useState, useEffect } from "react";
import { SearchInput, TableWrapper } from "./UnassignedBothTableStyle.js";
import LoadingScreen from "../../elements/Loading.jsx";
import { getAllCandidatesUnassignedBoth } from "../../apiCalls/candidate.js";


export default function UnassignedBothTable() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  if(1>0){
    console.log(setSearchTerms);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCandidatesUnassignedBoth();
        setCandidates(data);
        setFilteredCandidates(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerms.length === 0) {
      setFilteredCandidates(candidates);
    } else {
      let filtered = candidates.filter((candidate) => {
        let match = false;
        for (let i = 0; i < searchTerms.length; i++) {
          const searchTerm = searchTerms[i].toLowerCase();
          for (const [key, value] of Object.entries(candidate)) {
            if(key === null){
              console.log(key);
            }
            if (value.toLowerCase().includes(searchTerm)) {
              match = true;
              break;
            }
          }
          if (match) {
            break;
          }
        }
        return match;
      });
      setFilteredCandidates(filtered);
    }
  }, [candidates, searchTerms]);

  const handleSearchChange = (event) => {
    const searchTerms = event.target.value.toLowerCase().split(" ");
    const filteredCandidates = candidates.filter((candidate) => {
      for (let i = 0; i < searchTerms.length; i++) {
        const searchTerm = searchTerms[i];
        for (let key in candidate) {
          const value = candidate[key];
          if (typeof value === "string" && value.toLowerCase().includes(searchTerm)) {
            return true;
          }
        }
      }
      return false;
    });
    setFilteredCandidates(filteredCandidates);
  };
  return (
    <>
      <SearchInput type="text" id="allCandidateSearch" placeholder="Search..." onChange={handleSearchChange} />
      
      {loading ? (
        <LoadingScreen/>
      ) : (
        <>
          {filteredCandidates.length > 0 ? (
            <TableWrapper>
              <table>
                <thead>
                <tr>
            <th>CID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Father Name</th>
            <th>Last Name</th>
            <th>Firm Name</th>
            <th>Firm Branch</th>
            <th>Position Held</th>
            <th>Qualifications Applied For</th>
            <th>Created At</th>
          </tr>
                </thead>
                <tbody>
                  {filteredCandidates.map((item) => (
                    <tr key={item.cid}>
                    <td>{item.cid}</td>
                    <td>{item.title}</td>
                    <td>{item.first_name}</td>
                    <td>{item.father_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.firm_name}</td>
                    <td>{item.firm_branch}</td>
                    <td>{item.position_held}</td>
                    <td>{item.qualifications}</td>
                    <td>{new Date(item.created_at).toLocaleDateString('en-GB')}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          ) : (<h4 style={{ color: "red", marginTop: "1rem"}}>0 Candidates Found</h4>)}</>)}</>)
}
