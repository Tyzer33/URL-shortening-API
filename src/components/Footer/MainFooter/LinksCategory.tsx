import styled from 'styled-components'
import { colors, mediaQueries } from '../../../styles/variables'
import { flex } from '../../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1.5rem;

  @media ${mediaQueries.desktopUp} {
    width: 7rem;
    min-width: 7rem;
  }
`

const CategoryTitle = styled.h4`
  /* Fonts */
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.primaryText};

  @media ${mediaQueries.desktopUp} {
    letter-spacing: -0.0155em;
  }
`

const LinksList = styled.ul`
  ${flex({ direction: 'column' })}
  gap: 0.5625rem;

  /* Fonts */
  font-size: 1rem;
  letter-spacing: -0.047em;
`

const Link = styled.a`
  transition: color 0.2s ease-in;

  &:hover,
  &:focus {
    color: ${colors.primary};
  }
`

type Props = {
  category: string
  links: { text: string; url: string }[]
}

function LinksCategory({ category, links }: Props) {
  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
      <LinksList>
        {links.map(({ text, url }) => (
          <li key={text}>
            <Link href={url}>{text}</Link>
          </li>
        ))}
      </LinksList>
    </Container>
  )
}

export default LinksCategory
