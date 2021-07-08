import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const HeroStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin: 4rem 0;
  grid-gap: 1rem;

  /* TODO */
  /* Social icons should pop out from a button on the bottom of page */

  .hero-social-container {
    display: none;
  }
  .hero-card {
    margin: 1rem 0;
  }
  .hero-card:first-child {
    text-align: center;
  }

  button {
    color: white;
    background: linear-gradient(210deg, var(--purple), var(--blue));
    border: none;
    border-radius: 5px;
    padding: 1.5rem;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 5px 5px 5px var(--blueTransparent);
  }

  .hero-card-image {
    margin: 6rem 0;
    max-width: 360px;
    background: linear-gradient(210deg, var(--purple), var(--blue));
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
    box-shadow: 5px 5px 10px var(--blueTransparent);
  }

  @media (min-width: 800px) {
    grid-template-columns: 100px 2fr 1fr;
    text-align: left;

    .hero-card:first-child {
      text-align: left;
    }

    .hero-social-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .hero-social-icon {
      margin: 1.5rem 0;
      font-size: 2.25rem;
      cursor: pointer;
    }

    .hero-card-image {
      margin: 2rem 0;
    }
  }
`;

const Hero = ({ heroImage }) => {
  const joshImage = getImage(heroImage);

  return (
    <HeroStyles className='hero'>
      <div className='hero-social-container'>
        <InstagramIcon className='hero-social-icon' />
        <LinkedInIcon className='hero-social-icon' />
        <EmailIcon className='hero-social-icon' />
      </div>
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
