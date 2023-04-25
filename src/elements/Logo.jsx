import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
`;
const LogoImg = styled.h2`
font-size: 1.5rem;
font-weight: bold;
color: #012e4a;
`;
export default function Logo() {

  return (
    <Link to={"/"}>
    <LogoContainer>
    <LogoImg>
      ESA
    </LogoImg>
    <LogoImg>
      BFQ
    </LogoImg>
  </LogoContainer>
  </Link>
  )
}
