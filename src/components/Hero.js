import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const HeroStyles = styled.div`
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  align-items: center;

  .hero-card:first-child {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin: 5rem 0 0;
    grid-template-columns: 2fr 1fr;

    .hero-card:first-child {
      width: 70%;
    }
  }
`;
const Hero = ({ heroImage }) => {
  const joshImage = getImage(heroImage);

  return (
    <HeroStyles className='hero'>
      <div className='hero-card'>
        <h2>Hi! I'm Josh Nussbaum</h2>
        <h3>Frontend Developer</h3>
        <p>
          High level experience in web development and user first design.
          Creative design, accessible applications
        </p>
        <button>Contact Me</button>
      </div>
      <div className='hero-card'>
        <GatsbyImage image={joshImage} className='hero-card-image' />
      </div>
    </HeroStyles>
  );
};

export default Hero;
