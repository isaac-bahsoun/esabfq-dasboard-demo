// import React, { useEffect, useState } from 'react';
// // import Firm from '../data/firm';
// import './style.css';
// // import { SearchIcon } from '../icons/searche';
// // import { CancelIcon } from '../icons/cancel';
// // import { CheckIcon } from '../icons/submit';
// import { getAllFirms } from '../../apiCalls/firm.js';


// export default function FirmTable() {
//   const [query, setQuery] = useState('');
//   const [add, setAdd] = useState(false);

//   const [Firm ,setFirm] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllFirms();
//         setFirm(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
 
// //   const [NewFrim, setNewFrim] = useState({
// //     cid: '',
// //     firstName: '',
// //     fatherName: '',
// //     lastName: '',
// //     firmName: '',
// //     abbroviation: '',
// //   });

// //   const handleAdd = () => {
// //     setAdd(true);
// //   };

// //   const handleCancel = () => {
// //     setAdd(false);
// //     setNewFrim({
// //       cid: '',
// //       firstName: '',
// //       fatherName: '',
// //       lastName: '',
// //       firmName: '',
// //       abbroviation: '',
      
// //     });
// //   };

// //   const handleSave = () => {
// //     Firm.push(NewFrim);
// //     setAdd(false);
// //     setNewFrim({
// //       cid: '',
// //       firstName: '',
// //       fatherName: '',
// //       lastName: '',
// //       firmName: '',
// //       abbroviation: '',
// //     });
// //   };
// // const [filterData, setFilterData] = useState([]); 
// // useEffect(()=>{
// //     if(Firm.length > 0){
// //         setFilterData( Firm.filter((item, index) => {
// //             const { cid, firstName, fatherName, lastName, abbroviation, firmName } = item;
// //             return (
// //               cid.toLowerCase().includes(query.toLowerCase()) ||
// //               firstName.toLowerCase().includes(query.toLowerCase()) ||
// //               fatherName.toLowerCase().includes(query.toLowerCase()) ||
// //               lastName.toLowerCase().includes(query.toLowerCase()) ||
// //               abbroviation.toLowerCase().includes(query.toLowerCase()) ||
// //               firmName.toLowerCase().includes(query.toLowerCase())
// //             );
// //           }))
// //     }
// //  },[Firm])
  

// //   const handelDelete = (id) =>{
// //     const firmDelete = [...Firm].filter((row) =>row.id !== id)
// //     setFirm(firmDelete)
// //   }




//   return (
//     <div className="container is-widescreen">
//       <div className="columns">
//         <div className="column is-four-fifths ">
//           <div className="field is-grouped">
//             <div className="control has-icons-left">
//               <input
//                 id="searchSize"
//                 className="input"
//                 type="text"
//                 placeholder="Search Candidate"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//               <span className="icon is-left">
//                 {/* <SearchIcon /> */}S
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="column is-one-fifths">
//           {!add ? (
//             <button className="button is-primary" 
//             // onClick={handleAdd}
//             >
//               Add Firm
//             </button>
//           ) : (
//             <div className="field is-grouped">
//               <p className="control">
//                 <button className="button is-success" 
//                 // onClick={handleSave}
//                 >
//                   {/* <CheckIcon /> */}
//                   Check
//                 </button>
//               </p>
//               <p className="control">
//                 <button className="button is-danger" 
//                 // onClick={handleCancel}
//                 >
//                   {/* <CancelIcon /> */}
//                   CancelI
//                 </button>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//       <table className="table is-bordered is-striped is-hoverable" id="candidate">
//         <thead>
//           <tr>
//             <th>Frim</th>
//             <th>Abbreviation</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//             {Firm.length > ? Firm.map((f)=> (
                
//             ))}
//         </tbody>
//         {/* <tbody>
//            {add ? (
//             <tr>
//               <td>
//                 <input type="text" placeholder="CID" className='input is-small'
//                  value={NewFrim.cid}
//                  onChange={(e) => setNewFrim({ ...NewFrim, cid: e.target.value })}
//                 />
//               </td>
//               <td>
//                 <input type="text" placeholder="First Name" className='input is-small' required
//                  value ={NewFrim.firstName}
//                  onChange={(e) => setNewFrim({ ...NewFrim, firstName: e.target.value })}
//                   />
//               </td>
//               <td>
//                 <input type="text" placeholder="Father Name" className='input is-small' required
//                   value={NewFrim.fatherName}
//                   onChange={(e) => setNewFrim({ ...NewFrim, fatherName: e.target.value })} />
//               </td>
//               <td>
//                 <input type="text" placeholder="Last Name" className='input is-small' required
//                   value={NewFrim.lastName}
//                   onChange={(e) => setNewFrim({ ...NewFrim, lastName: e.target.value })} />
//               </td>
//               <td>
//                 <input type="text" placeholder="Firm Name" className='input is-small' required
//                   value={NewFrim.QualificationName}
//                   onChange={(e) => setNewFrim({ ...NewFrim, QualificationName: e.target.value })} />
//               </td>
//               <td>
//                 <input type="text" placeholder="Abbreviation" className='input is-small' required
//                   value={NewFrim.abbroviation}
//                   onChange={(e) => setNewFrim({ ...NewFrim, abbroviation: e.target.value })} />
//               </td>
//             </tr>
//           ) : null} 
//           {filterData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.cid}</td>
//               <td>{item.firstName}</td>
//               <td>{item.fatherName}</td>
//               <td>{item.lastName}</td>
//               <td>{item.firmName}</td>
//               <td>{item.abbroviation}</td>
//               <td> CancelIcon
//                  <CancelIcon onClick= {e=>handelDelete(item.id)}/>  
//                 </td>
//             </tr>
//           ))}
//         </tbody> */}
//       </table>
//     </div>
//   );
// }

      
