import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Description, Title } from './UnassignedBoxesStyle.js'

export default function UnassignedBoxes() {
  const linkStyle = {textDecoration:"none"};
  return (
    <Container>
      <Link to={"/candidates/unassigned/training"}  style={linkStyle} >
      
        <Box>
          <Title>Unassigned to Training</Title>
          <Description>Select candidates who have not been assigned to training.</Description>
        </Box>
        </Link>
        <Link to={"/candidates/unassigned/exam"} style={linkStyle} >
        <Box>
          <Title>Assigned to Training, Unassigned to Exam</Title>
          <Description>Select candidates who have been assigned to training, but not to an exam.</Description>
        </Box>
        </Link>
        <Link to={"/candidates/unassigned/both"} style={linkStyle} >
        <Box>
          <Title>Unassigned to Both Training and Exam</Title>
          <Description>Select candidates who have not been assigned to either training or an exam.</Description>
        </Box>
        </Link>
      </Container>
  )
}
