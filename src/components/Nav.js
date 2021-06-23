import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    li {
      padding: 0 1.4rem;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <h1>Josh</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
