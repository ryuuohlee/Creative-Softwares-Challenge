import styled from 'styled-components';

export const AppStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 411px) {
    flex-direction: column;
  }
`;

export const FilterContainer = styled.div`
  margin-left: 100px;
  width: 600px;
  @media (max-width: 411px) {
    width: auto;
    margin-left: 0;
  }
`;

export const ControlContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Filter = styled.span`
  margin: 10px;
  font-size: large;
  font-weight: bold;
`
export const Unfilter = styled.span`
  margin: 10px;
`
