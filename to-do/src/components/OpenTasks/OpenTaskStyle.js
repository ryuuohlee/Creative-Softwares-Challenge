import styled from 'styled-components';

export const CountContainer = styled.div`
  margin-left: 18px;
  margin-right: 100px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5%;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  height: auto;
  min-height: 30px;
  width: auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 411px) {
    flex-direction: row;
    font-size: small;
    height: 40px;
    width: auto;
    padding: 10px;
    margin: 10px;
    justify-content: center;
  }
`;

export const Tasks = styled.h1`
  margin: 2px;
  text-align: center;
  vertical-align: baseline;
  justify-content: center;
  font-size: 400%;
  color: red;
  @media (max-width: 411px) {
    font-size: 190%;
    padding-right: 4px;
    padding-bottom: -5px;
    margin-bottom: -5px;
    padding-top: 5px;
  }
`;

export const Label = styled.h3`
  margin: 2px;
  color: rgb(100,100,100);
  text-align: center;
  justify-content: center;
  vertical-align: baseline;
  @media (max-width: 411px) {
    font-size: 170%;
    padding-bottom: -5px;
    padding-top: 5px;
  }
`;
