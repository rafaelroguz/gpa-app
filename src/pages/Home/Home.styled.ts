import styled from 'styled-components';
import colors from '../../styles/colors';

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
`;

export const ImageCell = styled.img`
  height: 130px;
  width: 120px;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 64px;
  margin: 0 0 4px 0;
`;

export const PresenceCell = styled.span<{ $isPositive?: boolean }>`
  color: ${({ $isPositive }) => ($isPositive ? colors.aqua : colors.pita)};
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  height: 40px;
  line-height: 38.4px;
  margin: 0;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
