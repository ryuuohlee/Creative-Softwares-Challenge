import styled from 'styled-components';

export const ListContainer = styled.div`
  display: table;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5%;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  height: auto;
  min-height: 600px;
  width: auto;
  min-width: 275px;
  padding: 2rem;
  position: relative;
`;

export const AddTask = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
`