/* eslint-disable react/require-default-props */
import styled, { css } from 'styled-components'
import { colors } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const Container = styled.div<{ $isMenu: boolean }>`
  ${flex({ align: 'center' })}
  gap: 1.5rem;

  ${({ $isMenu }) =>
    $isMenu &&
    css`
      flex-direction: column;
    `}
`

const Login = styled.a`
  transition: color 0.2s ease-in;

  &:hover,
  &:focus {
    color: ${colors.secondaryText};
  }
`

const SignUp = styled.a<{ $isMenu: boolean }>`
  ${flex({ justify: 'center', align: 'center' })}
  background: ${colors.primary};
  border-radius: 1.5rem;
  color: ${colors.primaryText};
  padding-inline: 1.5rem;
  font-weight: 700;
  height: ${({ $isMenu }) => ($isMenu ? '3rem' : '2.5rem')};
  width: 100%;
  transition: box-shadow 0.2s ease-in;

  &:hover,
  &:focus {
    box-shadow: 100vmax 0 ${colors.buttonHover} inset;
  }
`

type Props = {
  isMenu?: boolean
}

function AccountButtons({ isMenu = false }: Props) {
  return (
    <Container $isMenu={isMenu}>
      <Login href="#">Login</Login>
      <SignUp href="#" $isMenu={isMenu}>
        Sign Up
      </SignUp>
    </Container>
  )
}

export default AccountButtons
