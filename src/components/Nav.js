import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    background: -webkit-linear-gradient(210deg, var(--purple), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    display: none;
    list-style: none;
    li {
      padding: 0 1.4rem;
    }
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <h1>Josh Nussbaum</h1>
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
