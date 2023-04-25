import React, { useState, useEffect } from "react";
import { SearchInput, TableWrapper } from "./AllCandidatesTableStyles.js";
import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
import LoadingScreen from "../../elements/Loading.jsx";

export default function AllCandidatesTable() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCandidatesInfo();
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
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Firm</th>
                    <th>Branch</th>
                    <th>Position</th>
                    <th>Qualifications</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCandidates.map((candidate) => (
                    <tr key={candidate.ID}>
                      <td>{candidate.CID}</td>
                      <td>
                        {candidate.Title} {candidate.first_name}{" "}
                        {candidate.father_name} {candidate.last_name}
                      </td>
                      <td>{candidate.phone}</td>
                      <td>{candidate.email}</td>
                      <td>{candidate.firm}</td>
                      <td>{candidate.branch}</td>
                      <td>{candidate.position}</td>
                      <td>{candidate.Qualifications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          ) : (<h4 style={{ color: "red", marginTop: "1rem"}}>0 Candidates Found</h4>)}</>)}</>)}
            
