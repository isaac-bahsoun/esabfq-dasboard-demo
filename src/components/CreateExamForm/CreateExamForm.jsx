import React, { useEffect, useState } from 'react'
import { createExam } from '../../apiCalls/exam.js';
import { getAllQualifications } from '../../apiCalls/qualification.js';
import { getAllRooms } from '../../apiCalls/room.js';
import { getAllInstructors } from '../../apiCalls/user.js';
import Modal from '../MessageModal/modal.jsx';
import { DivContainer, DivDate, DivTime, DivTimeEnd, InputD, InputT, LabelT, OptionT, Shape, StyleButton, WrapperDiv } from './CreateExamFormStyle.js';

export default function CreateExamForm() {

const [rooms,setRooms] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllRooms();
            setRooms(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
const [instructors,setInstructors] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllInstructors();
            setInstructors(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
const [qualifications,setQualifications] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllQualifications();
            setQualifications(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    const [instructorId, setInstructorId] = useState("");  
    const [qualificationId, setQualificationId] = useState("");  
    const [qualificationAbv, setQualificationAbv] = useState("");  
    const [roomId, setRoomId] = useState("");  
    const [roomName, setRoomName] = useState("");  
    const [date, setDate] = useState("");  
    const [startTime, setStartTime] = useState("");  
    const [endTime, setEndTime] = useState("");
    const [modalActive, setModalActive] = useState(false);  
    const [modalType, setModalType] = useState(false);  
    const [modalMessage, setModalMessage] = useState(false);  
    
    const handleInstructor = (i) => {
     
      setInstructorId(i);
      
    }
    const handleQualification = (v) => {
      const data = v.split(",");
      setQualificationId(parseInt(data[0]));
      setQualificationAbv(data[1]);
    }
    const handleRoom = (v) => {
      const data = v.split(",");
      setRoomId(parseInt(data[0]));
      setRoomName(data[1]);
    }
    const handleDate= (i) => {
      setDate(i); 
    }
    const handleStartTime= (i) => {
      setStartTime(i);
    }
    const handleEndTime= (i) => {
      setEndTime(i);
    }
    
    const handleSubmit = async () =>{
        if(instructorId !== "" && qualificationId  !== "" && qualificationAbv !== "" && roomId  !== "" && roomName  !== "" &&date  !== "" && startTime !== "" && endTime  )
        {
            const title = `E-${qualificationAbv}-${date}-${startTime}-${endTime}-${roomName}`;
            const payload = {
              type: "exam",
              instructorId: instructorId,
              qualificationId:qualificationId,
              roomId: roomId,
              date:date,
              start_time: startTime,
              end_time: endTime,
              title:title
            }
            
            try {
              const res = await createExam(payload);
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
            
            
           
            
        }else{
          setModalType("error")
          setModalMessage("All fields are required")
          setModalActive(true);
        }
      } 
  return (
    <>
    {modalActive && <Modal type={modalType} message={modalMessage} />}
    <DivContainer>

            <Shape onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
                <LabelT>Instructor</LabelT>
                <OptionT value={instructorId} onChange={(e)=>handleInstructor(e.target.value)}>
                    <option value="" >Select Instructor</option>
                         <>{instructors.length > 0? instructors.map((item, index) => (
                                    <option key={index} value={item.instructor_id} >{item.username}</option>

                                )) :  <option value={""}>NO instructors</option>}</>
                        
                        
                </OptionT>
                <LabelT>Qualification</LabelT>
                <OptionT  onChange={(e)=>handleQualification(e.target.value)}>
                    <option value="" >Select Qualification</option>
                    <>{qualifications.length > 0 ? qualifications.map((item, index) => (
                                

                                    <option key={index} value={`${item.qualification_id},${item.abv}`} >{item.name}</option>

                                )) : <option value={""}>NO qualifications</option>}</>

                </OptionT>
                <LabelT>Room</LabelT>
                <OptionT onChange={(e)=>handleRoom(e.target.value)}>
                <option value="" >Select Room</option>
                <>{rooms.length > 0 ? rooms.map((item, index) => (
                                

                                    <option key={index} value={`${item.room_id},${item.room}`} >{item.room}</option>

                                )) : <option value={""}>NO rooms</option>}</>

                </OptionT>
                
                     <LabelT>Date</LabelT>
                    <InputT type={'date'} onChange={(e)=>handleDate(e.target.value)} />
                <DivDate>
                    <DivTime> 
                        <LabelT>Start Time</LabelT>
                        <InputD type={'time'} onChange={(e)=>handleStartTime(e.target.value)}/>
                    </DivTime>
                    <DivTimeEnd>  
                       <LabelT>End Time</LabelT>
                        <InputD type={'time'} onChange={(e)=>handleEndTime(e.target.value)} />
                    </DivTimeEnd>
                </DivDate>


                <StyleButton onSubmit={(e)=> e.preventDefault}>Create</StyleButton>
            </Shape>
        </DivContainer>
        </>  
  )
}
