import styled, { css } from 'styled-components'
import { useState } from 'react'
import { colors, mediaQueries } from '../../../styles/variables'
import { useMediaQuery } from '../../../utils/customHooks'
import { flex } from '../../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  text-align: justify;
  gap: 0.75rem;
  background: white;
  padding: 1rem;
  border-radius: 0.375rem;
  z-index: 1;
  width: 100%;

  @media ${mediaQueries.desktopUp} {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    padding-inline: 2rem 1.5rem;
  }
`

const LongURL = styled.p`
  overflow: clip;
  text-overflow: ellipsis;
  color: ${colors.secondaryText};

  @media ${mediaQueries.desktopUp} {
    flex: 1;
    font-size: 1.25rem;
  }
`

const ShortURL = styled.a`
  overflow: clip;
  text-overflow: ellipsis;
  color: ${colors.primary};
  text-decoration: underline transparent;
  transition: text-decoration 0.2s ease-in;

  &:hover,
  &:focus {
    text-decoration-color: ${colors.primary};
  }

  @media ${mediaQueries.desktopUp} {
    font-size: 1.1875rem;
  }
`

const Line = styled.hr`
  border: none;
  height: 1px;
  margin-inline: -1rem;
  background: ${colors.cardLine};
`

const Button = styled.button<{ $isCopied: boolean }>`
  background: ${colors.primary};
  width: 100%;
  height: 2.5rem;
  border-radius: 0.375rem;

  /* Fonts */
  font-weight: 700;
  color: ${colors.primaryText};

  transition: box-shadow 0.2s ease-in;

  &:hover,
  &:focus {
    box-shadow: 100vmax 0 ${colors.buttonHover} inset;
  }

  @media ${mediaQueries.desktopUp} {
    padding-inline: 2rem;
    width: auto;
    font-size: 1rem;
  }

  ${({ $isCopied }) =>
    $isCopied &&
    css`
      background: ${colors.secondary};

      &:hover,
      &:focus {
        transition: none;
        box-shadow: none;
      }
    `}
`

type Props = {
  longURL: string
  shortURL: string
}

function ShortenedCard({ longURL, shortURL }: Props) {
  const [isCopied, setIsCopied] = useState(false)
  const isDesktopUp = useMediaQuery(mediaQueries.desktopUp)

  function handleClick() {
    navigator.clipboard.writeText(shortURL)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <Container>
      <LongURL>{longURL}</LongURL>
      {!isDesktopUp && <Line />}
      <ShortURL href={shortURL}>{shortURL}</ShortURL>
      <Button $isCopied={isCopied} type="button" onClick={() => !isCopied && handleClick()}>
        {isCopied ? 'Copied!' : 'Copy'}
      </Button>
    </Container>
  )
}

export default ShortenedCard
