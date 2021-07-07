import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1,
  ul a:hover {
    background: -webkit-linear-gradient(210deg, var(--purple), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    display: none;
    list-style: none;
    li:not(:last-child) {
      margin-right: 2.5rem;
    }
    a {
      text-decoration: none;
      background: black;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 800px) {
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
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/'>Portfolio</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
