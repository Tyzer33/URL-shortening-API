import styled from 'styled-components'
import { flex } from '../../styles/mixins'
import { colors } from '../../styles/variables'

const Container = styled.button`
  ${flex({ direction: 'column', justify: 'space-between' })}
  height: 1.3125rem;
  width: 1.5rem;

  div {
    height: 0.1875rem;
    width: 100%;
    background: ${colors.menuButton};
  }
`

type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuButton({ setShowMenu }: Props) {
  return (
    <Container type="button" onClick={() => setShowMenu((prev) => !prev)}>
      <div />
      <div />
      <div />
    </Container>
  )
}

export default MenuButton
