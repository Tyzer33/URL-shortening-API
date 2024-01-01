import styled from 'styled-components'
import { colors } from '../../styles/variables'
import GetStartedBanner from './GetStartedBanner'
import MainFooter from './MainFooter/MainFooter'
import { flex } from '../../styles/mixins'

const Container = styled.footer`
  ${flex({ direction: 'column', align: 'center' })}
  width: 100%;
  background: ${colors.footerBackground};
`

function GlobalFooter() {
  return (
    <Container>
      <GetStartedBanner />
      <MainFooter />
    </Container>
  )
}

export default GlobalFooter
