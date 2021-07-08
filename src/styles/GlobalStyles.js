import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${'' /* Poppins Google Font */}
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    :root {
        ${'' /* Colors */}
        --blue: #3A0CF7;
        --blueTransparent: #e5e1fa;
        --purple: #6900E0;
        ${'' /* Font Sizes */}
        --medium: 1.5rem;
        --large: 2.5rem;
        --extraLarge: 3.5rem;
    }

    body {
        font-family: 'Poppins', sans-serif;    
        margin: 0 1rem;
        background: white;
    }

    h1 {
        font-size: var(--medium);
    }

    h2 {
        font-size: var(--extraLarge);
    }

    h3 {
        font-size: var(--large);
    }

    h2, h3 {
        margin: 2rem 0;
    }

    p {
        font-size: var(--medium);
    }

    @media (min-width: 800px) {
        body {
            margin: 0 4rem;
        }
    }
`;

export default GlobalStyles;
