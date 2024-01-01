import GlobalFooter from './components/Footer/GlobalFooter'
import Header from './components/Header/Header'
import { useBackgroundContext } from './utils/customHooks'
import GlobalStyle from './styles/GlobalStyles'
import MainContent from './components/Main/MainContent'

// TODO: Ranger dans dossier
// TODO: Github pages

function App() {
  const { measure } = useBackgroundContext()

  return (
    <>
      <GlobalStyle $backgroundMeasure={measure} />
      <Header />
      <MainContent />
      <GlobalFooter />
    </>
  )
}

export default App
