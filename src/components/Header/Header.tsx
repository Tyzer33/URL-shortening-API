import styled from 'styled-components'
import { useState } from 'react'
import { colors, mediaQueries } from '../../styles/variables'
import Logo from '../shared/Logo'
import { useMediaQuery } from '../../utils/customHooks'
import Navigation from './Navigation'
import AccountButtons from './AccountButtons'
import Menu from './Menu'
import { flex } from '../../styles/mixins'
import MenuButton from './MenuButton'

const Container = styled.header`
  ${flex({ justify: 'space-between', align: 'center' })}
  position: relative;
  padding: 2.5rem 1.5rem 1.5rem;
  max-width: 69.375rem;
  width: 100%;
  gap: 2.75rem;

  /* Fonts */
  font-size: 0.9375rem;
  font-weight: 700;

  @media ${mediaQueries.desktopUp} {
    padding: none;
    margin: 2.5rem 10.25rem 5rem;
  }
`

function Header() {
  const isMobile = useMediaQuery(mediaQueries.mobileOnly)
  const [showMenu, setShowMenu] = useState(false)

  if (isMobile) {
    return (
      <Container>
        <Logo fill={colors.secondaryText} />
        <MenuButton setShowMenu={setShowMenu} />
        {showMenu && <Menu />}
      </Container>
    )
  }

  return (
    <Container>
      <Logo fill={colors.secondaryText} />
      <Navigation />
      <AccountButtons />
    </Container>
  )
}

export default Header
