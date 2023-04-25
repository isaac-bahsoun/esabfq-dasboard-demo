import styled from "styled-components";

export const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: calc(100vw - 16rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* justify-content: space-between; */
  margin-top: 5rem;
  gap: 2rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 14rem;
  height: 8rem;
  background-color: #e8ede7;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  /* flex-basis: calc(33.33% - 10px); */
  padding: 1rem;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  color: #036280;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #378ba4;
  font-size: 0.75rem;
  line-height: 1.5;
`;
