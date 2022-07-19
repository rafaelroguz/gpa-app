import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
  background-color: ${colors.blue};
  height: 70px;
  padding: 4px 28px;
  width: 100%;

  & div {
    margin: 0 auto;
    max-width: 1440px;
  }
`;
