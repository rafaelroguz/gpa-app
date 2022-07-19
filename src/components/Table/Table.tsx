import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  Cell,
  Container,
  HeaderRow,
  StyledTable,
  TableRow,
} from './Table.styled';

interface Column {
  id: string;
  label: string;
}

export interface Row {
  id: number;
  cellData: React.ReactNode[];
}

interface Props {
  columns: Column[];
  rows: Row[];
}

const Table: React.FC<Props> = ({ columns, rows }) => {
  return (
    <Container>
      <StyledTable>
        <thead>
          <HeaderRow>
            {columns.map(({ id, label }) => (
              <th key={id}>{label}</th>
            ))}
          </HeaderRow>
        </thead>
        <tbody>
          {rows.map(({ id, cellData }) => (
            <TableRow key={id}>
              {cellData.map((data) => (
                <Cell key={uuid()}>{data}</Cell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;
