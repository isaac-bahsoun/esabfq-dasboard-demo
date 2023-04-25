// import React, { useState, useEffect } from "react";
// import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
// import LoadingScreen from "../../elements/Loading.jsx";
// import { TableWrapper } from "./PerFirmStyle.js";

// export default function PerFirmTable() {
//     const [candidates, setCandidates] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedFirms, setSelectedFirms] = useState([]); // State for selected firms from dropdown

//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const data = await getAllCandidatesInfo();
//             setCandidates(data);
//             setLoading(false);
//           } catch (error) {
//             console.log(error);
//           }
//         };
//         fetchData();
//       }, []);

//     const handleFirmsSelect = (e) => {
//         setSelectedFirms(Array.from(e.target.selectedOptions, (option) => option.value));
//     };

//     const filterCandidatesByFirms = (candidates) => {
//         if (selectedFirms.length > 0) {
//             return candidates.filter((candidate) => selectedFirms.includes(candidate.firm));
//         } else {
//             return candidates;
//         }
//     };

//   return (
//     <>
//     {loading ? (
//       <LoadingScreen/>
//     ) : (
//       <>
//         <div style={{ marginBottom: "1rem" }}>
//           <label htmlFor="firm-select">Filter by firm: </label>
//           <select id="firm-select" multiple onChange={handleFirmsSelect} style={{ minWidth: "200px" }}>
//             {candidates.length > 0 && [...new Set(candidates.map((candidate) => candidate.firm))].sort().map((firm) => (
//               <option key={firm} value={firm}>{firm}</option>
//             ))}
//           </select>
//         </div>
//         {candidates.length > 0 ? (
//           <TableWrapper>
//             <table>
//               <thead>
//                 <tr>
//                   <th>CID</th>
//                   <th>Full Name</th>
//                   <th>Phone</th>
//                   <th>Email</th>
//                   <th>Firm</th>
//                   <th>Branch</th>
//                   <th>Position</th>
//                   <th>Qualifications</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filterCandidatesByFirms(candidates).map((candidate) => (
//                   <tr key={candidate.ID}>
//                     <td>{candidate.CID}</td>
//                     <td>
//                       {candidate.Title} {candidate.first_name}{" "}
//                       {candidate.father_name} {candidate.last_name}
//                     </td>
//                     <td>{candidate.phone}</td>
//                     <td>{candidate.email}</td>
//                     <td>{candidate.firm}</td>
//                     <td>{candidate.branch}</td>
//                     <td>{candidate.position}</td>
//                     <td>{candidate.Qualifications}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </TableWrapper>
//         ) : (<h4 style={{ color: "red", marginTop: "1rem"}}>0 Candidates Found</h4>)}</>)}</>
//   )
// }


// import React, { useState, useEffect } from "react";
// import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
// import LoadingScreen from "../../elements/Loading.jsx";
// import { TableWrapper } from "./PerFirmStyle.js";
// import Select from "react-select";

// export default function PerFirmTable() {
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedFirms, setSelectedFirms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllCandidatesInfo();
//         setCandidates(data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleFilterChange = (selectedOptions) => {
//     setSelectedFirms(selectedOptions);
//   };

//   const filteredCandidates = candidates.filter(
//     (candidate) =>
//       selectedFirms.length === 0 ||
//       selectedFirms.some((firm) => firm.value === candidate.firm)
//   );

//     const firmOptions = [...new Set(candidates.map((candidate) => candidate.firm))].sort().map((firm) =>({value: firm , label: firm}) );

//   return (
//     <>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <>
//           <Select
//             isMulti
//             options={firmOptions}
//             onChange={handleFilterChange}
//             value={selectedFirms}
//             placeholder="Filter by firm..."
//           />
//           {filteredCandidates.length > 0 ? (
//             <TableWrapper>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>CID</th>
//                     <th>Full Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>Firm</th>
//                     <th>Branch</th>
//                     <th>Position</th>
//                     <th>Qualifications</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredCandidates.map((candidate) => (
//                     <tr key={candidate.ID}>
//                       <td>{candidate.CID}</td>
//                       <td>
//                         {candidate.Title} {candidate.first_name}{" "}
//                         {candidate.father_name} {candidate.last_name}
//                       </td>
//                       <td>{candidate.phone}</td>
//                       <td>{candidate.email}</td>
//                       <td>{candidate.firm}</td>
//                       <td>{candidate.branch}</td>
//                       <td>{candidate.position}</td>
//                       <td>{candidate.Qualifications}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </TableWrapper>
//           ) : (
//             <h4 style={{ color: "red", marginTop: "1rem" }}>
//               0 Candidates Found
//             </h4>
//           )}
//         </>
//       )}
//     </>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
// import LoadingScreen from "../../elements/Loading.jsx";
// import { TableWrapper } from "./PerFirmStyle.js";
// import Select from "react-select";

// export default function PerFirmTable() {
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedFirms, setSelectedFirms] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllCandidatesInfo();
//         setCandidates(data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleFilterChange = (selectedOptions) => {
//     setSelectedFirms(selectedOptions);
//   };

//   const filteredCandidates = candidates.filter(
//     (candidate) =>
//       selectedFirms.length === 0 ||
//       selectedFirms.some((firm) => firm.value === candidate.firm)
//   ).filter(
//     (candidate) =>
//       searchTerm === "" ||
//       Object.values(candidate).some((value) => {
//         if (typeof value === "string") {
//           return value.toLowerCase().includes(searchTerm.toLowerCase());
//         }
//         return false;
//       })
//   );

//   const firmOptions = [...new Set(candidates.map((candidate) => candidate.firm))]
//     .sort()
//     .map((firm) => ({ value: firm, label: firm }));

//   return (
//     <>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <Select
//               isMulti
//               options={firmOptions}
//               onChange={handleFilterChange}
//               value={selectedFirms}
//               placeholder="Filter by firm..."
//               style={{ flex: 1, marginRight: "1rem" }}
//             />
//             <input
//               type="text"
//               placeholder="Search all columns..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{ flex: 2 }}
//             />
//           </div>
//           {filteredCandidates.length > 0 ? (
//             <TableWrapper>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>CID</th>
//                     <th>Full Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>Firm</th>
//                     <th>Branch</th>
//                     <th>Position</th>
//                     <th>Qualifications</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredCandidates.map((candidate) => (
//                     <tr key={candidate.ID}>
//                       <td>{candidate.CID}</td>
//                       <td>
//                         {candidate.Title} {candidate.first_name}{" "}
//                         {candidate.father_name} {candidate.last_name}
//                       </td>
//                       <td>{candidate.phone}</td>
//                       <td>{candidate.email}</td>
//                       <td>{candidate.firm}</td>
//                       <td>{candidate.branch}</td>
//                       <td>{candidate.position}</td>
//                       <td>{candidate.Qualifications}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </TableWrapper>
//           ) : (
//             <h4 style={{ color: "red", marginTop: "1rem" }}>
//                            0 Candidates Found
//                          </h4>
//                        )}
//                      </>
//                    )}
//                  </>
//                );
//              }


//  Search ma3 space mesh zabet

// import React, { useState, useEffect } from "react";
// import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
// import LoadingScreen from "../../elements/Loading.jsx";
// import { TableWrapper } from "./PerFirmStyle.js";
// import Select from "react-select";

// export default function PerFirmTable() {
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedFirms, setSelectedFirms] = useState([]);
//   const [searchTerms, setSearchTerms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllCandidatesInfo();
//         setCandidates(data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleFilterChange = (selectedOptions) => {
//     setSelectedFirms(selectedOptions);
//   };

//   const handleSearchChange = (e) => {
//     const terms = e.target.value.split(" ").filter((term) => term.trim() !== "");
//     setSearchTerms(terms);
//   };

//   const filteredCandidates = candidates.filter(
//     (candidate) =>
//       selectedFirms.length === 0 ||
//       selectedFirms.some((firm) => firm.value === candidate.firm)
//   ).filter(
//     (candidate) =>
//       searchTerms.length === 0 ||
//       searchTerms.every((term) =>
//         Object.values(candidate).some((value) =>
//           typeof value === "string" && value.toLowerCase().includes(term.toLowerCase())
//         )
//       )
//   );





//   const firmOptions = [...new Set(candidates.map((candidate) => candidate.firm))]
//     .sort()
//     .map((firm) => ({ value: firm, label: firm }));

//   return (
//     <>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <Select
//               isMulti
//               options={firmOptions}
//               onChange={handleFilterChange}
//               value={selectedFirms}
//               placeholder="Filter by firm..."
//               style={{ flex: 1, marginRight: "1rem" }}
//             />
//             <input
//               type="text"
//               placeholder="Search all columns..."
//               value={searchTerms.join(" ")}
//               onChange={handleSearchChange}
//               style={{ flex: 2 }}
//             />
//           </div>
//           {filteredCandidates.length > 0 ? (
//             <TableWrapper>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>CID</th>
//                     <th>Full Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>Firm</th>
//                     <th>Branch</th>
//                     <th>Position</th>
//                     <th>Qualifications</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredCandidates.map((candidate) => (
//                     <tr key={candidate.ID}>
//                       <td>{candidate.CID}</td>
//                       <td>
//                         {candidate.Title} {candidate.first_name}{" "}
//                         {candidate.father_name} {candidate.last_name}
//                       </td>
//                       <td>{candidate.phone}</td>
//                       <td>{candidate.email}</td>
//                       <td>{candidate.firm}</td>
//                       <td>{candidate.branch}</td>
//                                              <td>{candidate.position}</td>
//                        <td>{candidate.Qualifications}</td>
//                      </tr>
//                    ))}
//                  </tbody>
//                </table>
//              </TableWrapper>
//            ) : (
//              <h4 style={{ color: "red", marginTop: "1rem" }}>
//                             0 Candidates Found
//                           </h4>
//                         )}
//                       </>
//                     )}
//                   </>
//                 );
//               }



// Working search bas bebayen options:

// import React, { useState, useEffect } from "react";
// import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
// import LoadingScreen from "../../elements/Loading.jsx";
// import { TableWrapper } from "./PerFirmStyle.js";
// import Select from "react-select";

// const MultiSelect = ({ options, onChange, value, placeholder }) => {
//   return (
//     <Select
//       isMulti
//       options={options}
//       onChange={onChange}
//       value={value}
//       placeholder={placeholder}
//     />
//   );
// };

// export default function PerFirmTable() {
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedFirms, setSelectedFirms] = useState([]);
//   const [searchTerms, setSearchTerms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllCandidatesInfo();
//         setCandidates(data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleFilterChange = (selectedOptions) => {
//     setSelectedFirms(selectedOptions);
//   };

//   const handleSearchChange = (selectedOptions) => {
//     setSearchTerms(selectedOptions.map((option) => option.value));
//   };

//   const filteredCandidates = candidates.filter(
//     (candidate) =>
//       selectedFirms.length === 0 ||
//       selectedFirms.some((firm) => firm.value === candidate.firm)
//   ).filter(
//     (candidate) =>
//       searchTerms.length === 0 ||
//       searchTerms.some(
//         (term) =>
//           Object.values(candidate).some((value) => {
//             if (typeof value === "string") {
//               return value.toLowerCase().includes(term.toLowerCase());
//             }
//             return false;
//           })
//       )
//   );

//   const firmOptions = [...new Set(candidates.map((candidate) => candidate.firm))]
//     .sort()
//     .map((firm) => ({ value: firm, label: firm }));

//   const allSearchTerms = Array.from(
//     new Set(
//       candidates.reduce(
//         (terms, candidate) => [
//           ...terms,
//           ...Object.values(candidate)
//             .filter((value) => typeof value === "string")
//             .map((value) => value.toLowerCase()),
//         ],
//         []
//       )
//     )
//   )
//     .sort()
//     .map((term) => ({ value: term, label: term }));

//   return (
//     <>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <MultiSelect
//               options={firmOptions}
//               onChange={handleFilterChange}
//               value={selectedFirms}
//               placeholder="Filter by firm..."
//             />
//             <MultiSelect
//               options={allSearchTerms}
//               onChange={handleSearchChange}
//               value={searchTerms.map((term) => ({ value: term, label: term }))}
//               placeholder="Search all columns..."
//             />
//           </div>
//           {filteredCandidates.length > 0 ? (
//             <TableWrapper>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>CID</th>
//                     <th>Full Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>Firm</th>
//                     <th>Branch</th>
//                     <th>Position</th>
//                     <th>Qualifications</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                    {filteredCandidates.map((candidate) => (
//                      <tr key={candidate.ID}>
//                        <td>{candidate.CID}</td>
//                        <td>
//                          {candidate.Title} {candidate.first_name}{" "}
//                          {candidate.father_name} {candidate.last_name}
//                        </td>
//                        <td>{candidate.phone}</td>
//                        <td>{candidate.email}</td>
//                        <td>{candidate.firm}</td>
//                        <td>{candidate.branch}</td>
//                        <td>{candidate.position}</td>
//                        <td>{candidate.Qualifications}</td>
//                      </tr>
//                    ))}
//                  </tbody>
//                </table>
//              </TableWrapper>
//            ) : (
//              <h4 style={{ color: "red", marginTop: "1rem" }}>
//                             0 Candidates Found
//                           </h4>
//                         )}
//                       </>
//                     )}
//                   </>
//                 );
//               }






// import React, { useState, useEffect } from "react";
// import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
// import LoadingScreen from "../../elements/Loading.jsx";
// import { TableWrapper } from "./PerFirmStyle.js";
// import Select from "react-select";

// const MultiSelect = ({ options, onChange, value, placeholder }) => {
//   return (
//     <Select
//       isMulti
//       options={options}
//       onChange={onChange}
//       value={value}
//       placeholder={placeholder}
//     />
//   );
// };

// export default function PerFirmTable() {

//     const MultiSearch = ({ options, onChange, value, placeholder }) => {
//         return (
//           <Select
//             isMulti
//             isSearchable
//             onChange={onChange}
//             value={value}
//             placeholder={placeholder}
//           />
//         );
//       };
        
//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedFirms, setSelectedFirms] = useState([]);
//   const [searchTerms, setSearchTerms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllCandidatesInfo();
//         setCandidates(data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleFilterChange = (selectedOptions) => {
//     setSelectedFirms(selectedOptions);
//   };

//   const handleSearchChange = (selectedOptions) => {
//     setSearchTerms(selectedOptions.map((option) => option.value));
//   };

//   const filteredCandidates = candidates.filter(
//     (candidate) =>
//       selectedFirms.length === 0 ||
//       selectedFirms.some((firm) => firm.value === candidate.firm)
//   ).filter(
//     (candidate) =>
//       searchTerms.length === 0 ||
//       searchTerms.some(
//         (term) =>
//           Object.values(candidate).some((value) => {
//             if (typeof value === "string") {
//               return value.toLowerCase().includes(term.toLowerCase());
//             }
//             return false;
//           })
//       )
//   );

//   const firmOptions = [...new Set(candidates.map((candidate) => candidate.firm))]
//     .sort()
//     .map((firm) => ({ value: firm, label: firm }));

//   const allSearchTerms = Array.from(
//     new Set(
//       candidates.reduce(
//         (terms, candidate) => [
//           ...terms,
//           ...Object.values(candidate)
//             .filter((value) => typeof value === "string")
//             .map((value) => value.toLowerCase()),
//         ],
//         []
//       )
//     )
//   )
//     .sort()
//     .map((term) => ({ value: term, label: term }));

//   return (
//     <>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <MultiSelect
//               options={firmOptions}
//               onChange={handleFilterChange}
//               value={selectedFirms}
//               placeholder="Filter by firm..."
//             />
//             <MultiSearch
//             //   options={allSearchTerms}
//               onChange={handleSearchChange}
//               value={searchTerms.map((term) => ({ value: term, label: term }))}
//               placeholder="Search all columns..."
//             />
//           </div>
//           {filteredCandidates.length > 0 ? (
//             <TableWrapper>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>CID</th>
//                     <th>Full Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>Firm</th>
//                     <th>Branch</th>
//                     <th>Position</th>
//                     <th>Qualifications</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                    {filteredCandidates.map((candidate) => (
//                      <tr key={candidate.ID}>
//                        <td>{candidate.CID}</td>
//                        <td>
//                          {candidate.Title} {candidate.first_name}{" "}
//                          {candidate.father_name} {candidate.last_name}
//                        </td>
//                        <td>{candidate.phone}</td>
//                        <td>{candidate.email}</td>
//                        <td>{candidate.firm}</td>
//                        <td>{candidate.branch}</td>
//                        <td>{candidate.position}</td>
//                        <td>{candidate.Qualifications}</td>
//                      </tr>
//                    ))}
//                  </tbody>
//                </table>
//              </TableWrapper>
//            ) : (
//              <h4 style={{ color: "red", marginTop: "1rem" }}>
//                             0 Candidates Found
//                           </h4>
//                         )}
//                       </>
//                     )}
//                   </>
//                 );
//               }
                  



import React, { useState, useEffect } from "react";
import { getAllCandidatesInfo } from "../../apiCalls/candidate.js";
import LoadingScreen from "../../elements/Loading.jsx";
import { FilterLabel, TableWrapper } from "./PerFirmStyle.js";
import Select from "react-select";

const MultiSelect = ({ options, onChange, value, placeholder }) => {
  return (
    <Select
      isMulti
      options={options}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default function PerFirmTable() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFirms, setSelectedFirms] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCandidatesInfo();
        setCandidates(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (selectedOptions) => {
    setSelectedFirms(selectedOptions);
  };

  const handleSearchChange = (selectedOptions) => {
    setSearchTerms(selectedOptions.map((option) => option.value));
  };

  const filteredCandidates = candidates.filter(
    (candidate) =>
      selectedFirms.length === 0 ||
      selectedFirms.some((firm) => firm.value === candidate.firm)
  ).filter(
    (candidate) =>
      searchTerms.length === 0 ||
      searchTerms.some(
        (term) =>
          Object.values(candidate).some((value) => {
            if (typeof value === "string") {
              return value.toLowerCase().includes(term.toLowerCase());
            }
            return false;
          })
      )
  );

  const firmOptions = [...new Set(candidates.map((candidate) => candidate.firm))]
    .sort()
    .map((firm) => ({ value: firm, label: firm }));

  const allSearchTerms = Array.from(
    new Set(
      candidates.reduce(
        (terms, candidate) => [
          ...terms,
          ...Object.values(candidate)
            .filter((value) => typeof value === "string")
            .map((value) => value.toLowerCase()),
        ],
        []
      )
    )
  )
    .sort()
    .map((term) => ({ value: term, label: term }));

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
            
          <div style={{ display: "flex", flexDirection:"column" }}>
          <FilterLabel>Firms:</FilterLabel>
            <MultiSelect
              options={firmOptions}
              onChange={handleFilterChange}
              value={selectedFirms}
              placeholder="Filter by firm..."
            />
            <div style={{marginBottom:"1rem"}}> </div>
            <FilterLabel>Search:</FilterLabel>
            <MultiSelect
              options={allSearchTerms}
              onChange={handleSearchChange}
              value={searchTerms.map((term) => ({ value: term, label: term }))}
              placeholder="Search all columns..."
            />
          </div>
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
           ) : (
             <h4 style={{ color: "red", marginTop: "1rem" }}>
                            0 Candidates Found
                          </h4>
                        )}
                      </>
                    )}
                  </>
                );
              }
