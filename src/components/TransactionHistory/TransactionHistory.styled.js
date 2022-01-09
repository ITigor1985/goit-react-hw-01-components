import styled from "styled-components";

export const TableTransactionHistory = styled.table`
  width: 900px;
  margin: 0 auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-collapse: collapse;
`;

export const TableColumnTitle = styled.th`
  color: white;
  font-size: 22px;
  background-color: #66cdaa;
  height: 50px;
`;
export const TableBody = styled.tbody`
  > :nth-child(even) {
    background-color: #4682b4;
    color: white;
  }
`;

export const TableRow = styled.tr`
  height: 50px;
  font-size: 18px;
  text-align: center;
  & > :not(:last-child) {
    border-right: 1px solid grey;
  }
`;
export const Td = styled.td`
  border: ;
`;
