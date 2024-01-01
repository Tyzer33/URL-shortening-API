import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BackgroundProvider from './context/Background/BackgroundProvider'
import ShortenURLProvider from './context/ShortenedURL/ShortenURLProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShortenURLProvider>
      <BackgroundProvider>
        <App />
      </BackgroundProvider>
    </ShortenURLProvider>
  </React.StrictMode>,
)
