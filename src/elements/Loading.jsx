import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #6b7a8f;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: calc(100vw - 10rem);
`;

const LoadingScreen = () => {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
};

export default LoadingScreen;
