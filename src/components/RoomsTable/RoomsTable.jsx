import React, { useState, useEffect } from "react";
import { SearchInput, TableWrapper } from "./RoomTableStyle.js";
import LoadingScreen from "../../elements/Loading.jsx";
// import { createFirm, getAllFirms } from "../../apiCalls/firm.js";
// import FirmRow from "./FirmRow.jsx";
import {IoMdAddCircleOutline} from 'react-icons/io';
import styled from "styled-components";
import Modal from "../MessageModal/modal.jsx";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { createRoom, getAllRooms } from "../../apiCalls/room.js";
import RoomRow from "./RoomRow.jsx";

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
    align-items: center;
`


export default function RoomsTable() {
  const [Rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdd,setIsAdd] = useState(false);
  const [room,setRoom] = useState("");
  const [modalActive, setModalActive] = useState(false);  
  const [modalType, setModalType] = useState(false);  
  const [modalMessage, setModalMessage] = useState(false);
  const handleAdd = () => {
        setIsAdd(true);
    }
  const handleCancel = () => {
        setIsAdd(false);
    }
    const changeRoom = (v) => {
        // console.log(v)
        setRoom(v);
    }
  
    const handleCreate = async() => {
        try {
            
        const res = await createRoom({room:room}); 
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
        const data = await getAllRooms();
        setRooms(data);
        setFilteredRooms(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerms.length === 0) {
      setFilteredRooms(Rooms);
    } else {
      let filtered = Rooms.filter((room) => {
        let match = false;
        for (let i = 0; i < searchTerms.length; i++) {
          const searchTerm = searchTerms[i].toLowerCase();
          for (const [key, value] of Object.entries(room)) {
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
      setFilteredRooms(filtered);
    }
  }, [Rooms, searchTerms]);

  const handleSearchChange = (event) => {
    const searchTerms = event.target.value.toLowerCase().split(" ");
    const filteredData= Rooms.filter((d) => {
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
    setFilteredRooms(filteredData);
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
          {filteredRooms.length > 0 ? (
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Room</th>
                    
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isAdd && 
                  <tr>
                  <td><TextInput type="text" value={room} onChange={(e)=>changeRoom(e.target.value)} /></td>
                  <td><ConfirmIcon onClick={handleCreate}  /> <DeleteIcon onClick={handleCancel} /></td>      
              </tr>
                  }
                  {filteredRooms.map((item,index) => (
                    <RoomRow key={index} item={item} />
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          ) : (<h4 style={{ color: "red", marginTop: "1rem"}}>0 Rooms Found</h4>)}</>)}</>)}
            
