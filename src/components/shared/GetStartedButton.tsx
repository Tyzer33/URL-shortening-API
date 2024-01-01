import styled from 'styled-components'
import { colors } from '../../styles/variables'
import { flex } from '../../styles/mixins'

const StyledButton = styled.a`
  ${flex({ align: 'center' })}
  background: ${colors.primary};
  height: 3.5rem;
  border-radius: 1.75rem;
  padding-inline: 2.5rem;

  /* Fonts */
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.primaryText};

  transition: box-shadow 0.2s ease-in;

  &:hover,
  &:focus {
    box-shadow: 100vmax 0 ${colors.buttonHover} inset;
  }
`

function GetStartedButton() {
  return <StyledButton href="#">Get Started</StyledButton>
}

export default GetStartedButton
