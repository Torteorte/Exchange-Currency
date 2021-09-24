import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 300px;
  margin: 30px auto;
  border: 1px solid #6b6b6b;
  border-collapse: collapse;
  border-radius: 3px;
`;

export const StyledTr = styled.tr`
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #6b6b6b;
  height: 45px;

  :nth-of-type(2n + 1) td {
    background-color: rgba(224, 255, 255, 0.3);
  }
`;

export const StyledTh = styled.th`
  width: 50%;
  font-weight: 500;
  text-align: center;
  padding: 10px 0;
  background-color: whitesmoke;
`;

export const StyledTd = styled.td`
  font-weight: 300;
  padding: 10px;
  min-height: 45px;
`;
