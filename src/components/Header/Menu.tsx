import styled from 'styled-components'
import Navigation from './Navigation'
import AccountButtons from './AccountButtons'
import { colors } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  text-align: center;
  position: absolute;
  inset: auto 1.5rem 0;
  translate: 0 100%;
  padding: 2.5rem 1.5rem;
  background: ${colors.secondary};
  border-radius: 0.75rem;
  gap: 1.875rem;
  z-index: 1;

  /* Fonts */
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.primaryText};
`

const Line = styled.hr`
  border: none;
  height: 1px;
  background: ${colors.menuLine};
`

function Menu() {
  return (
    <Container>
      <Navigation isMenu />
      <Line />
      <AccountButtons isMenu />
    </Container>
  )
}

export default Menu
