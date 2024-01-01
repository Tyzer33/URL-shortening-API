import styled from 'styled-components'
import illustration from '../../../assets/illustration-working.svg'
import { colors, mediaQueries } from '../../../styles/variables'
import GetStartedButton from '../../shared/GetStartedButton'
import { flex } from '../../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  gap: 2.625rem;

  @media ${mediaQueries.desktopUp} {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 6.5rem;
  }
`

const ImageContainer = styled.div`
  img {
    overflow: visible;
    height: 21.0625rem;
    object-fit: cover;
    object-position: left;

    @media ${mediaQueries.desktopUp} {
      height: 30.0625rem;
    }
  }
`

const TextContainer = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  max-width: 34.875rem;

  @media ${mediaQueries.desktopUp} {
    align-items: flex-start;
    text-align: left;
  }
`

const Heading = styled.h1`
  /* Fonts */
  font-size: 2.625rem;
  font-weight: 700;
  letter-spacing: -0.0475em;
  color: ${colors.secondaryText};
  line-height: 1.15;

  @media ${mediaQueries.desktopUp} {
    font-size: 4.875rem;
    letter-spacing: -0.0385em;
  }
`

const BodyText = styled.p`
  margin: 0.75rem 0 1.875rem;
  max-width: 28rem;
  width: 100%;

  /* Fonts */
  font-size: 1.125rem;
  line-height: 1.675;

  @media ${mediaQueries.desktopUp} {
    margin: 0;
    margin-bottom: 2.25rem;
    max-width: none;

    /* Fonts */
    font-size: 1.375rem;
    letter-spacing: -0.045em;
  }
`

function Discover() {
  return (
    <Container>
      <ImageContainer>
        <img src={illustration} alt="illustration of someone working on a computer" />
      </ImageContainer>
      <TextContainer>
        <Heading>More than just shorter links</Heading>
        <BodyText>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </BodyText>
        <GetStartedButton />
      </TextContainer>
    </Container>
  )
}

export default Discover
