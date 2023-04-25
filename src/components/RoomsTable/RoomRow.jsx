import React, { useState } from 'react'
import {RxCross2} from "react-icons/rx"
import {AiOutlineEdit , AiOutlineCheck} from "react-icons/ai"
import styled from 'styled-components'
import Modal from '../MessageModal/modal.jsx'
import { deleteRoom, updateRoom } from '../../apiCalls/room.js'

const EditIcon = styled(AiOutlineEdit)`
    color: #012e4a;
    font-size: 1.25rem;
    cursor: pointer;
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

export default function RoomRow({item}) {
    const [modalActive, setModalActive] = useState(false);  
    const [modalType, setModalType] = useState(false);  
    const [modalMessage, setModalMessage] = useState(false);

    const [isEdit,setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    }
    const handleCancel = () => {
        setEdit(false);
    }
    const [room,setRoom] = useState(item.room);
    
    const changeRoom= (v) => {
        setRoom(v);
    }
    const handleUpdate = async() => {
        try {
            
        const res = await updateRoom(item.room_id, {room:room}); 
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
                setModalMessage("Something went wrong. Please try again later.")
                setModalActive(true);
              }
        }
        
        setEdit(false);
    }
    const handleDelete = async() => {
        try {
            
        const res = await deleteRoom(item.room_id); 
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
                setModalMessage("Something went wrong. Please try again later.")
                setModalActive(true);
              }
        }
        
        setEdit(false);
    }
  return (
    <>
    {modalActive && <Modal type={modalType} message={modalMessage}/> }
    {
        isEdit ?
        <tr>
            <td><TextInput type="text" defaultValue={item.room} onChange={(e)=>changeRoom(e.target.value)} /></td>
            <td><ConfirmIcon onClick={handleUpdate}  /> <DeleteIcon onClick={handleCancel} /></td>      
        </tr>
        :
        <tr>
            <td>{item.room}</td>
            <td><EditIcon onClick={handleEdit}  /> <DeleteIcon onClick={handleDelete}  /></td>      
        </tr>
        
        
        
    }
    </>
    
  )
}
