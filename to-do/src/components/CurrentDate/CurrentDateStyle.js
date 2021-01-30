import styled from 'styled-components';

export const DateContainer = styled.div`
  margin: 18px;
  margin-top: 35px;
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
  flex-direction: column;
  @media (max-width: 411px) {
    margin-top: 10px;
    margin: 10px;
    flex-direction: row;
    padding: 10px;
    justify-content: center;
  }

`;

export const Day = styled.h2`
  margin: 2px;
  color: rgb(100,100,100);
  @media (max-width: 411px) {
    font-size: large;
    padding-right: 5px;
  }
`;

export const Date = styled.h1`
  margin: 2px;
  @media (max-width: 411px) {
    font-size: large;
    padding-right: 5px;
  }
`;

export const Year = styled.h2`
  margin: 2px;
  color: rgb(190,190,190);
  @media (max-width: 411px) {
    font-size: large;
  }
`;