import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5%;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  height: auto;
  min-height: 800px;
  width: auto;
  min-width: 275px;
  padding: 1.25rem;
  position: relative;
  @media (max-width: 411px) {
    height: 150px;
    min-height: 550px;
  }
`;

export const AddTask = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
`;

export const Add = styled.button`
  color: white;
  background-color: red;
  border-radius: 50%;
  border: 0px;
  text-decoration: none;
  height: 50px;
  width: 50px;
  font-size: 150%;
  font: strong
`;

export const CloseModal = styled.button`
  position: absolute;
  right: 1rem;
`;
