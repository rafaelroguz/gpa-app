import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import React from 'react';
import { Container } from './Header.styled';

const Header: React.FC = () => (
  <Container>
    <LogoIcon />
  </Container>
);

export default Header;
