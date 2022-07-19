import styled from 'styled-components';
import colors from '../../styles/colors';

export const Card = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray100};
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  height: 40px;
  line-height: 38.4px;
  margin: 0;
`;
