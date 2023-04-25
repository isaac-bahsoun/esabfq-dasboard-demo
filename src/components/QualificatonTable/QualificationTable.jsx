import React, { useState, useEffect } from "react";
import { SearchInput, TableWrapper } from "./QualificationTableStyle.js";
import LoadingScreen from "../../elements/Loading.jsx";
// import FirmRow from "./FirmRow.jsx";
import {IoMdAddCircleOutline} from 'react-icons/io';
import styled from "styled-components";
import Modal from "../MessageModal/modal.jsx";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { createQualification, getAllQualifications } from "../../apiCalls/qualification.js";
import QualificationRow from "./QualificationRow.jsx";

const AddIcon = styled(IoMdAddCircleOutline)`
    fill: #378ba4;
    font-size: 2rem;
    cursor: pointer;
    :hover{
        fill: #036280; 
    }
    
`
const ConfirmIcon = styled(AiOutlineCheck)`
    color: green;
    font-size: 1.25rem;
    cursor: pointer;

`
const DeleteIcon = styled(RxCross2)`
    color: red;
    font-size: 1.25rem;
    cursor: pointer;

`
const TextInput = styled.input`
    padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #0077cc;
  }
`
const HeaderContainer = styled.div`
    display: flex;
    gap: 2rem;
    /* justify-content: space-between; */
    align-items: center;
`


export default function QualificationTable() {
  const [Qualifications, setQualifications] = useState([]);
  const [filteredQualifications, setFilteredQualifications] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdd,setIsAdd] = useState(false);
  const [name,setName] = useState("");
  const [abv,setAbv] = useState("");
  const [provider,setProvider] = useState("");
  const [modalActive, setModalActive] = useState(false);  
  const [modalType, setModalType] = useState(false);  
  const [modalMessage, setModalMessage] = useState(false);
  const handleAdd = () => {
        setIsAdd(true);
    }
  const handleCancel = () => {
        setIsAdd(false);
    }
    const changeName = (v) => {
        
        setName(v);
    }
    const changeAbv= (v) => {
        setAbv(v);
    }
    const changeProvider= (v) => {
        setProvider(v);
    }
    const handleCreate = async() => {
      if(name === "" || abv === "" || provider === ""){
        setModalType("error")
        setModalMessage("All fields are required")
        setModalActive(true);
}
        try {
            
        const res = await createQualification({abv:abv,name:name,offered_by:provider}); 
        setModalType("success")
              setModalMessage(res.data.message)
              setModalActive(true); 
        } catch (error) {
            if (error.response && error.response.data.success === false) {
                setModalType("error")
                setModalMessage(error.response.data.message)
                setModalActive(true);
              } else {
                setModalType("error")
                setModalMessage(`Something went wrong. Please try again later.
                ${error}
                `)
                setModalActive(true);
              }
        }
        
        setIsAdd(false);
    }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllQualifications();
        setQualifications(data);
        setFilteredQualifications(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerms.length === 0) {
      setFilteredQualifications(Qualifications);
    } else {
      let filtered = Qualifications.filter((q) => {
        let match = false;
        for (let i = 0; i < searchTerms.length; i++) {
          const searchTerm = searchTerms[i].toLowerCase();
          for (const [key, value] of Object.entries(q)) {
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
      setFilteredQualifications(filtered);
    }
  }, [Qualifications, searchTerms]);

  const handleSearchChange = (event) => {
    const searchTerms = event.target.value.toLowerCase().split(" ");
    const filteredData= Qualifications.filter((d) => {
      for (let i = 0; i < searchTerms.length; i++) {
        const searchTerm = searchTerms[i];
        for (let key in d) {
          const value = d[key];
          if (typeof value === "string" && value.toLowerCase().includes(searchTerm)) {
            return true;
          }
        }
      }
      return false;
    });
    setFilteredQualifications(filteredData);
  };

  return (
    <>
    {modalActive && <Modal type={modalType} message={modalMessage}/> }
        <HeaderContainer>
            <SearchInput type="text" id="allSearch" placeholder="Search..." onChange={handleSearchChange} />
            <AddIcon onClick={handleAdd} title="Add" />
        </HeaderContainer>
      
      {loading ? (
        <LoadingScreen/>
      ) : (
        <>
          {filteredQualifications.length > 0 ? (
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Qualification</th>
                    <th>Qualification Abbreviation</th>
                    <th>Offered By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isAdd && 
                  <tr>
                  <td><TextInput type="text" value={name} onChange={(e)=>changeName(e.target.value)} /></td>
                  <td><TextInput type="text" value={abv} onChange={(e)=>changeAbv(e.target.value)}/></td>      
                  <td><TextInput type="text" value={provider} onChange={(e)=>changeProvider(e.target.value)}/></td>      
                  <td><ConfirmIcon onClick={handleCreate}  /> <DeleteIcon onClick={handleCancel} /></td>      
              </tr>
                  }
                  {filteredQualifications.map((item,index) => (
                    <QualificationRow key={index} item={item} />
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          ) : (<h4 style={{ color: "red", marginTop: "1rem"}}>0 qualifications Found</h4>)}</>)}</>)}
            
