import React from 'react';
import { Header, Footer } from '../components';
import { GlobalStyles } from '../styles';

export type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
