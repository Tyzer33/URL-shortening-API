/* eslint-disable react/require-default-props */
import styled, { css } from 'styled-components'
import { colors } from '../../styles/variables'

const Container = styled.nav`
  flex: 1;
`

const LinkList = styled.ul<{ $isMenu: boolean }>`
  display: flex;
  gap: 1.875rem;

  ${({ $isMenu }) =>
    $isMenu &&
    css`
      flex-direction: column;
    `}

  li {
    display: flex;
  }

  a {
    width: 100%;
    transition: color 0.2s ease-in;

    &:hover,
    &:focus {
      color: ${colors.secondaryText};
    }
  }
`

type Props = {
  isMenu?: boolean
}

function Navigation({ isMenu = false }: Props) {
  const navLinks = [
    { text: 'Features', url: '#' },
    { text: 'Pricing', url: '#' },
    { text: 'Resources', url: '#' },
  ]

  return (
    <Container>
      <LinkList $isMenu={isMenu}>
        {navLinks.map(({ text, url }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </LinkList>
    </Container>
  )
}

export default Navigation
