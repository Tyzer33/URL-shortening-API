import styled from 'styled-components'
import DescriptionCard from './DescriptionCard'
import { colors, mediaQueries } from '../../../styles/variables'
import { cards } from '../../../utils/data'
import { flex } from '../../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  padding-bottom: 5rem;
`

const TextContainer = styled.div`
  text-align: center;
`

const Title = styled.h2`
  /* Fonts */
  font-size: 1.75rem;
  letter-spacing: -0.0715em;
  font-weight: 700;
  color: ${colors.secondaryText};

  @media ${mediaQueries.desktopUp} {
    font-size: 2.5rem;
    letter-spacing: -0.0375em;
  }
`

const BodyText = styled.p`
  margin-block: 1.125rem 5.75rem;
  max-width: 28.5rem;
  width: 100%;

  /* Fonts */
  font-size: 1rem;
  line-height: 1.75;

  @media ${mediaQueries.desktopUp} {
    font-size: 1.125rem;
    letter-spacing: -0.055em;
  }
`

const CardContainer = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  position: relative;
  gap: 5.75rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0.5rem auto;
    background: ${colors.primary};
    width: 0.5rem;
  }

  @media ${mediaQueries.desktopUp} {
    flex-direction: row;
    gap: 1.875rem;
    height: 22.1875rem;

    &::before {
      inset: auto 0.5rem;
      height: 0.5rem;
      width: auto;
    }

    & > *:first-child {
      align-self: flex-start;
    }

    & > *:last-child {
      align-self: flex-end;
    }
  }
`

function Description() {
  return (
    <Container>
      <TextContainer>
        <Title>Advanced Statistics</Title>
        <BodyText>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </BodyText>
      </TextContainer>
      <CardContainer>
        {cards.map(({ image, title, text }) => (
          <DescriptionCard image={image} title={title} text={text} key={title} />
        ))}
      </CardContainer>
    </Container>
  )
}

export default Description
