import React from 'react';
import { graphql } from 'gatsby';

// Components
import Hero from '../components/Hero';

// This is the landing page
const IndexPage = ({ data }) => {
  const heroImage = data.allImageSharp.edges[0].node.gatsbyImageData;

  return (
    <>
      <Hero heroImage={heroImage} />
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allImageSharp {
      edges {
        node {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            width: 750
          )
        }
      }
    }
  }
`;

export default IndexPage;
