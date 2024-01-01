import { useContext, useEffect, useState } from 'react'
import ShortenURLContext from '../context/ShortenedURL/ShortenURLContext'
import { BackgroundContextProps, ShortenedURLContextProps } from './types'
import BackgroundContext from '../context/Background/BackgroundContext'

export function useShortenedURLContext() {
  return useContext(ShortenURLContext) as ShortenedURLContextProps
}

export function useBackgroundContext() {
  return useContext(BackgroundContext) as BackgroundContextProps
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}
