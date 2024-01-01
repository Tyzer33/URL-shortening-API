import { createGlobalStyle, css } from 'styled-components'
import { colors, mediaQueries } from './variables'
import { Measure } from '../utils/types'
import { flex } from './mixins'

const GlobalStyle = createGlobalStyle<{ $backgroundMeasure: Measure }>`
  /* Simple CSS Reset */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  body {
    min-height: 100vh;
  }

  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }

  button {
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    border: none;
  }

  /* Style */

  body {

    // Calculate the background transition based on the backgroundMeasure prop
    ${({ $backgroundMeasure }) =>
      $backgroundMeasure &&
      css`
        --background-transition: calc(${$backgroundMeasure.rem} + 5rem);

        @media ${mediaQueries.desktopUp} {
          --background-transition: calc(${$backgroundMeasure.rem} + 5.25rem);
        }
      `}

    background: ${colors.primaryBackground};
    background: linear-gradient(
        180deg,
        ${colors.primaryBackground} var(--background-transition),
        ${colors.secondaryBackground} var(--background-transition)
      );

    /* Fonts */
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    line-height: 1.65;
    color: ${colors.bodyText};
  }

  div#root {
    ${flex({ direction: 'column', align: 'center' })}
  }
`

export default GlobalStyle
