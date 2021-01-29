import styled from 'styled-components';

export const DateContainer = styled.div`
  margin: 18px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5%;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  height: auto;
  min-height: 30px;
  width: auto;
  min-width: 30px;
  padding: 2rem;
  position: relative;
  display: flex;
  @media (max-width: 411px) {
    flex-direction: row;
  }

`;

export const Day = styled.h3`
  margin: 2px;
  color: rgb(100,100,100);
  @media (max-width: 411px) {
    font-size: large;
  }
`;

export const Date = styled.h1`
  margin: 2px;
  @media (max-width: 411px) {
    font-size: large;
  }
`;

export const Year = styled.h2`
  margin: 2px;
  color: rgb(190,190,190);
  @media (max-width: 411px) {
    font-size: large;
  }
`;