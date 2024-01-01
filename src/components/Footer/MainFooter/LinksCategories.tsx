import styled from 'styled-components'
import { FooterLinks } from '../../../utils/data'
import { flex } from '../../../styles/mixins'
import { mediaQueries } from '../../../styles/variables'
import LinksCategory from './LinksCategory'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: 2.5rem;

  @media ${mediaQueries.desktopUp} {
    flex-direction: row;
    justify-content: space-between;
    justify-content: flex-end;
    gap: 4.875rem;
    flex: 1;
  }
`

function LinksCategories() {
  return (
    <Container>
      {FooterLinks.map(({ category, links }) => (
        <LinksCategory key={category} category={category} links={links} />
      ))}
    </Container>
  )
}

export default LinksCategories
