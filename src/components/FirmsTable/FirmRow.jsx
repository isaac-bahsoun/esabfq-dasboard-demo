import React, { useState } from 'react'
import {RxCross2} from "react-icons/rx"
import {AiOutlineEdit , AiOutlineCheck} from "react-icons/ai"
import styled from 'styled-components'
import { deleteFirm, updateFirm } from '../../apiCalls/firm.js'
import Modal from '../MessageModal/modal.jsx'

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

export default function FirmRow({item}) {
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
    const [name,setName] = useState(item.firm_name);
    const [abv,setAbv] = useState(item.firm_abv);
    const changeName = (v) => {
        setName(v);
    }
    const changeAbv= (v) => {
        setAbv(v);
    }
    const handleUpdate = async() => {
        try {
            
        const res = await updateFirm(item.firm_id, {firmName:name, firmAbv:abv}); 
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
            
        const res = await deleteFirm(item.firm_id); 
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
            <td><TextInput type="text" value={item.firm_name} onChange={(e)=>changeName(e.target.value)} /></td>
            <td><TextInput type="text" value={item.abv} onChange={(e)=>changeAbv(e.target.value)}/></td>      
            <td><ConfirmIcon onClick={handleUpdate}  /> <DeleteIcon onClick={handleCancel} /></td>      
        </tr>
        :
        <tr>
            <td>{item.firm_name}</td>
            <td>{item.firm_abv}</td>      
            <td><EditIcon onClick={handleEdit}  /> <DeleteIcon onClick={handleDelete}  /></td>      
        </tr>
        
        
        
    }
    </>
    
  )
}
