import styled from 'styled-components'
import Input from './Input'
import ShortenedCard from './ShortenedCard'
import { mediaQueries } from '../../../styles/variables'
import { useShortenedURLContext } from '../../../utils/customHooks'
import { flex } from '../../../styles/mixins'

const Container = styled.div`
  ${flex({ direction: 'column' })}
  gap: 1.5rem;
  max-width: 20.5rem;
  width: 100%;

  @media ${mediaQueries.desktopUp} {
    max-width: 69.375rem;
  }
`

function ShorteningSection() {
  const { latestURL } = useShortenedURLContext()

  return (
    <Container>
      <Input />
      {latestURL.map(({ id, longURL, shortURL }) => (
        <ShortenedCard key={id} longURL={longURL} shortURL={shortURL} />
      ))}
    </Container>
  )
}

export default ShorteningSection
