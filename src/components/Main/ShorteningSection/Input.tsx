import styled, { css } from 'styled-components'
import bgImgMobile from '../../../assets/bg-shorten-mobile.svg'
import bgImgDesktop from '../../../assets/bg-shorten-desktop.svg'
import { colors, mediaQueries } from '../../../styles/variables'
import { useBackgroundContext, useShortenedURLContext } from '../../../utils/customHooks'
import { ShorteningError } from '../../../utils/types'
import { flex } from '../../../styles/mixins'

const Container = styled.form`
  ${flex({ direction: 'column' })}
  position: relative;
  padding: 1.5rem;
  background: top right no-repeat url(${bgImgMobile}) ${colors.secondary};
  border-radius: 0.625rem;
  z-index: 1;

  @media ${mediaQueries.desktopUp} {
    padding: 3.25rem;
    gap: 1.5rem;
    flex-direction: row;
    background-image: url(${bgImgDesktop});
    background-position: top center;
  }
`
const LinkInput = styled.input<{ $error: ShorteningError }>`
  padding-inline: 1rem;
  border-radius: 0.3125rem;
  height: 3rem;

  /* Fonts */
  font-size: 1rem;

  &::placeholder {
    opacity: 0.75;
  }

  ${({ $error }) =>
    $error &&
    css`
      outline: 0.1875rem solid ${colors.error};
      outline-offset: -0.1875rem;

      &::placeholder {
        color: ${colors.error};
        opacity: 0.5;
      }
    `}

  @media ${mediaQueries.desktopUp} {
    height: 4rem;
    flex: 1;
    font-size: 1.25rem;
    padding-inline: 2rem;
  }
`

const ErrorText = styled.p`
  text-align: justify;
  margin-top: 0.5rem;

  /* Fonts */
  font-size: 0.75rem;
  letter-spacing: -0.0415em;
  font-style: italic;
  color: ${colors.error};

  @media ${mediaQueries.desktopUp} {
    margin-top: 0;
    position: absolute;
    bottom: 1.375rem;
    font-size: 1rem;
  }
`

const Button = styled.button`
  background-color: ${colors.primary};
  height: 3rem;
  border-radius: 0.3125rem;
  margin-top: 1rem;

  /* Fonts */
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.primaryText};

  transition: box-shadow 0.2s ease-in;

  &:hover,
  &:focus {
    box-shadow: 100vmax 0 ${colors.buttonHover} inset;
  }

  @media ${mediaQueries.desktopUp} {
    width: 11.75rem;
    height: 4rem;
    margin-top: 0;
    font-size: 1.25rem;
    border-radius: 0.625rem;
  }
`

function Input() {
  const { inputedURL, setInputedURL, handleSubmit, error } = useShortenedURLContext()
  const { reference } = useBackgroundContext()

  return (
    <Container ref={reference} onSubmit={(e) => handleSubmit(e)}>
      <LinkInput
        value={inputedURL}
        onChange={(e) => setInputedURL(e.target.value)}
        type="text"
        placeholder="Shorten a link here..."
        $error={error}
      />
      {error && <ErrorText>{error.errormessage}</ErrorText>}
      <Button type="submit">Shorten It!</Button>
    </Container>
  )
}

export default Input
