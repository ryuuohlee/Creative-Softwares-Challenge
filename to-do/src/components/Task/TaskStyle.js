import styled from 'styled-components';

export const TaskContainer = styled.div`
  margin-bottom: 8px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5%;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  height: auto;
  min-height: 30px;
  width: auto;
  padding: 5px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
`;

export const PriorityStates = styled.div`
  right: 0px;
`;

export const Priority = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProgressName = styled.div`
  display: flex;
`;

export const Label = styled.div`
  margin-left: 15px;
`;

export const Low = styled.button`
  width: 30%;
  color: white;
  background-color: green;
  text-aling: center;
  border-radius: 16px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Medium = styled.button`
  width: 30%;
  color: white;
  background-color: orange;
  text-aling: center;
  border-radius: 16px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const High = styled.button`
  width: 30%;
  color: white;
  background-color: red;
  text-aling: center;
  border-radius: 16px;
  border: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const NotSelected = styled.button`
  width: 30%;
  color: white;
  background-color: rgb(170,170,170);
  text-aling: center;
  border-radius: 16px;
  border: 0px;
  margin-top: 12px;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 12px;
`;