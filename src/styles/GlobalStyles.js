import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${'' /* Rubik Google Font */}
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); 
    
    :root {
        ${'' /* Colors */}
        --lightBlue: #474f97;
        --blue: #1a237e;
        --darkBlue: #121858;
        ${'' /* Font Sizes */}

        ${'' /* Shadows */}
    }

    body {
        margin: 0 1rem;
        font-family: 'Rubik', sans-serif;
    }

    @media (min-width: 768px) {
        body {
            margin: 0 3rem;
        }
    }
`;

export default GlobalStyles;
