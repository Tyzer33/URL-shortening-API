import styled from 'styled-components'
import { colors, mediaQueries } from '../../../styles/variables'
import { flex } from '../../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  position: relative;
  background: ${colors.primaryBackground};
  border-radius: 0.375rem;
  padding: 4.875rem 2.125rem 2.125rem;
  gap: 0.9375rem;

  max-width: 20.5rem;
  width: 100%;

  @media ${mediaQueries.desktopUp} {
    align-items: flex-start;
    padding: 4.875rem 2rem 2rem;
    max-width: 21.875rem;
  }
`

const ImageContainer = styled.div`
  ${flex({ justify: 'center', align: 'center' })}
  position: absolute;
  top: 0;
  background: ${colors.secondary};
  height: 5.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  translate: 0 -50%;
`

const Heading = styled.h3`
  /* Fonts */
  font-size: 1.375rem;
  font-weight: 700;
  color: ${colors.secondaryText};
`

const BodyText = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  letter-spacing: -0.0325em;
`

type Props = {
  image: string
  title: string
  text: string
}

function DescriptionCard({ image, title, text }: Props) {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="icon" />
      </ImageContainer>
      <Heading>{title}</Heading>
      <BodyText>{text}</BodyText>
    </Container>
  )
}

export default DescriptionCard
