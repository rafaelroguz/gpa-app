import React, { Fragment } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Main } from './Layout.styled';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Fragment>
);

export default Layout;
