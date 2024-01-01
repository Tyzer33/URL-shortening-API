import styled from 'styled-components'
import Logo from '../../shared/Logo'
import { colors, mediaQueries } from '../../../styles/variables'
import { FacebookLink, TwitterLink, PinterestLink, InstagramLink } from './SocialMediaLinks'
import { flex } from '../../../styles/mixins'
import LinksCategories from './LinksCategories'

const Container = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  text-align: center;
  padding-block: 3.375rem 3.5rem;
  gap: 3rem;

  @media ${mediaQueries.desktopUp} {
    flex-direction: row;
    align-items: flex-start;
    text-align: justify;
    padding: 4.375rem 2.5rem;
    max-width: 69.375rem;
    width: 100%;
    gap: 4.375rem;
  }
`

const SocialMedia = styled.div`
  ${flex({ align: 'center' })}
  gap: 1.5rem;
`

function MainFooter() {
  return (
    <Container>
      <Logo fill={colors.primaryText} />
      <LinksCategories />
      <SocialMedia>
        <FacebookLink />
        <TwitterLink />
        <PinterestLink />
        <InstagramLink />
      </SocialMedia>
    </Container>
  )
}

export default MainFooter
