import styled from 'styled-components';

export const AppStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 411px) {
    flex-direction: column;
  }
`;

export const Filter = styled.span`
  margin: 5px;
`