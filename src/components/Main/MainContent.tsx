import styled from 'styled-components'
import { mediaQueries } from '../../styles/variables'
import Discover from './Discover/Discover'
import ShorteningSection from './ShorteningSection/ShorteningSection'
import Description from './Description/Description'
import { flex } from '../../styles/mixins'

const Container = styled.main`
  ${flex({ direction: 'column', align: 'center' })}
  margin-inline: 1.5rem;
  text-align: center;
  gap: 5.5rem;

  @media ${mediaQueries.desktopUp} {
    text-align: left;
    max-width: 69.375rem;
    margin-inline: 2.5rem;
  }
`

function MainContent() {
  return (
    <Container>
      <Discover />
      <ShorteningSection />
      <Description />
    </Container>
  )
}

export default MainContent
