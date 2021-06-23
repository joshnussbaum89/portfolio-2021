import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

// Components
import Nav from '../components/Nav';

// Wraps everything with components that persist throughout entire site
export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
    </div>
  );
}
