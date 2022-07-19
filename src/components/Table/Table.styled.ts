import styled from 'styled-components';
import colors from '../../styles/colors';

export const Cell = styled.td`
  color: ${colors.gray800};
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 16px 8px;
`;

export const Container = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow-x: auto;
  width: 100%;
`;

export const StyledTable = styled.table`
  border: 1px solid ${colors.gray100};
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

export const HeaderRow = styled.tr`
  background-color: ${colors.gray400};
  height: 70px;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background: ${colors.white};
  }

  &:nth-child(even) {
    background: ${colors.gray100};
  }
`;
