import { createGlobalStyle, styled } from 'styled-components';
import data from './data';
import { useState } from 'react';
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
      <Wrapper>      
        <Questions questions={questions} />
        <GlobalStyles />
      </Wrapper>
  )
}

export default App

const Wrapper = styled.main`
    max-width: 23.438rem;    
    margin: auto;
    border-radius: 0.5rem;  
    box-shadow: 0px 32px 56px 0px rgba(80, 0, 118, 0.10);
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: #FFF;

    @media (min-width: 37.5rem) {
      max-width: 37.5rem;
      border-radius: 1rem;
    }
`;

export const GlobalStyles = createGlobalStyle`
  /** RESET **/

*, *::before, *::after {
    box-sizing: border-box;
    }
    * {
    margin: 0;
    }
    html {
    height: 100%;
    position: relative;
    }
    body {      
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    input, button, textarea, select {
    font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    #root, #__next {
    isolation: isolate;
    }
    /** GLOBAL STYLES **/
    body {
        margin: 0;
        padding: 0;
        background: hsl(275, 100%, 97%);
        font-family: 'Work Sans', sans-serif;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../background-pattern-mobile.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-size: contain;

        @media (min-width: 600px) {
          background-image: url("../background-pattern-desktop.svg");
        }
    }
`;
