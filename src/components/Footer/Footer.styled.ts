import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.footer`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  height: 60px;
  margin: 120px auto 0 auto;
  padding: 16px;
  width: 100%;

  & p {
    font-weight: bold;
    margin: 0;
    text-align: center;
  }
`;
