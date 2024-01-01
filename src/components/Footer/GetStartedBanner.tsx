import styled from 'styled-components'
import backgroundMobile from '../../assets/bg-boost-mobile.svg'
import backgroundDesktop from '../../assets/bg-boost-desktop.svg'
import { colors, mediaQueries } from '../../styles/variables'
import GetStartedButton from '../shared/GetStartedButton'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column', align: 'center', justify: 'center' })}
  background: center / cover no-repeat url(${backgroundMobile}) ${colors.secondary};
  height: 18.75rem;
  gap: 1.125rem;
  width: 100%;

  /* Fonts */
  color: ${colors.primaryText};

  @media ${mediaQueries.desktopUp} {
    background-image: url(${backgroundDesktop});
  }
`

const Heading = styled.h2`
  /* Fonts */
  font-size: 1.75rem;
  letter-spacing: -0.035em;
  font-weight: 700;

  @media ${mediaQueries.desktopUp} {
    font-size: 2.5rem;
    letter-spacing: -0.025em;
  }
`

function GetStartedBanner() {
  return (
    <Container>
      <Heading>Boost your links today</Heading>
      <GetStartedButton />
    </Container>
  )
}

export default GetStartedBanner
