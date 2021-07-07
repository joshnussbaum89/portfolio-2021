import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const HeroStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  margin: 2rem 0;
  grid-gap: 1rem;

  .hero-card {
    margin: 2rem 0;
  }
  .hero-card:first-child {
    text-align: center;
    /* h3 {
      font-weight: 200;
    } */
  }

  button {
    color: white;
    background: linear-gradient(210deg, var(--purple), var(--blue));
    border: none;
    border-radius: 5px;
    padding: 1.5rem;
    cursor: pointer;
  }

  .hero-card-image {
    margin: 2rem 0;
    background: linear-gradient(210deg, var(--purple), var(--blue));
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;

    .hero-card:first-child {
      text-align: left;
    }
  }
`;
const Hero = ({ heroImage }) => {
  const joshImage = getImage(heroImage);

  return (
    <HeroStyles className='hero'>
      <div className='hero-card'>
        <h2>Hi, I'm Josh</h2>
        <h3>Frontend Developer</h3>
        <p>
          High level experience in web development and user first applications.
          Creative design, accessible experiences.
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
