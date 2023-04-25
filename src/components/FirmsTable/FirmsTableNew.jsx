import React, { useState, useEffect } from "react";
import { SearchInput, TableWrapper } from "./FirmTableStyle.js";
import LoadingScreen from "../../elements/Loading.jsx";
import { createFirm, getAllFirms } from "../../apiCalls/firm.js";
import FirmRow from "./FirmRow.jsx";
import {IoMdAddCircleOutline} from 'react-icons/io';
import styled from "styled-components";
import Modal from "../MessageModal/modal.jsx";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

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


export default function FirmTable() {
  const [Firms, setFirms] = useState([]);
  const [filteredFirms, setFilteredFirms] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdd,setIsAdd] = useState(false);
  const [name,setName] = useState("");
  const [abv,setAbv] = useState("");
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
        console.log(v)
        setName(v);
    }
    const changeAbv= (v) => {
        setAbv(v);
    }
    const handleCreate = async() => {
        try {
            
        const res = await createFirm({firmName:name,firmAbv:abv}); 
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
        const data = await getAllFirms();
        setFirms(data);
        setFilteredFirms(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerms.length === 0) {
      setFilteredFirms(Firms);
    } else {
      let filtered = Firms.filter((firm) => {
        let match = false;
        for (let i = 0; i < searchTerms.length; i++) {
          const searchTerm = searchTerms[i].toLowerCase();
          for (const [key, value] of Object.entries(firm)) {
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
      setFilteredFirms(filtered);
    }
  }, [Firms, searchTerms]);

  const handleSearchChange = (event) => {
    const searchTerms = event.target.value.toLowerCase().split(" ");
    const filteredData= Firms.filter((d) => {
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
    setFilteredFirms(filteredData);
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
          {filteredFirms.length > 0 ? (
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Firm</th>
                    <th>Firm Abbreviation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isAdd && 
                  <tr>
                  <td><TextInput type="text" value={name} onChange={(e)=>changeName(e.target.value)} /></td>
                  <td><TextInput type="text" value={abv} onChange={(e)=>changeAbv(e.target.value)}/></td>      
                  <td><ConfirmIcon onClick={handleCreate}  /> <DeleteIcon onClick={handleCancel} /></td>      
              </tr>
                  }
                  {filteredFirms.map((item,index) => (
                    <FirmRow key={index} item={item} />
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          ) : (<h4 style={{ color: "red", marginTop: "1rem"}}>0 Firms Found</h4>)}</>)}</>)}
            
