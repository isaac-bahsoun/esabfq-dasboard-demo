import React, { useState } from 'react'
import {RxCross2} from "react-icons/rx"
import {AiOutlineEdit , AiOutlineCheck} from "react-icons/ai"
import styled from 'styled-components'
import Modal from '../MessageModal/modal.jsx'
import { deleteQualification, updateQualification } from '../../apiCalls/qualification.js'

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

export default function QualificationRow({item}) {
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
    const [name,setName] = useState("");
    const [abv,setAbv] = useState("");
    const [provider,setProvider] = useState("");
    const changeName = (v) => {
        setName(v);
    }
    const changeAbv= (v) => {
        setAbv(v);
    }
    const changeProvider= (v) => {
        setProvider(v);
    }
    const handleUpdate = async() => {
        if(name === "" || abv === "" || provider === ""){
                setModalType("error")
                setModalMessage("All fields are required")
                setModalActive(true);
        }
        try {
            
        const res = await updateQualification(item.qualification_id, {abv:abv,name:name,offered_by:provider}); 
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
            
        const res = await deleteQualification(item.qualification_id); 
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
            <td><TextInput type="text" defaultValue={item.name} onChange={(e)=>changeName(e.target.value)} /></td>
            <td><TextInput type="text" defaultValue={item.abv} onChange={(e)=>changeAbv(e.target.value)}/></td>      
            <td><TextInput type="text" defaultValue={item.offered_by} onChange={(e)=>changeProvider(e.target.value)}/></td>      
            <td><ConfirmIcon onClick={handleUpdate}  /> <DeleteIcon onClick={handleCancel} /></td>      
        </tr>
        :
        <tr>
            <td>{item.name}</td>
            <td>{item.abv}</td>      
            <td>{item.offered_by}</td>      
            <td><EditIcon onClick={handleEdit}  /> <DeleteIcon onClick={handleDelete}  /></td>      
        </tr>
        
        
        
    }
    </>
    
  )
}
