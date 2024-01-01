import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import ShortenURLContext from './ShortenURLContext'
import { APIresponse, ShorteningError, LatestURLItem } from '../../utils/types'

type Props = {
  children: ReactNode
}

function ShortenURLProvider({ children }: Props) {
  const [latestURL, setLatestURL] = useState<LatestURLItem[]>([])
  const [inputedURL, setInputedURL] = useState('')
  const [error, setError] = useState<ShorteningError>(null)

  useEffect(() => {
    const localHistory = localStorage.getItem('history')
    const history: LatestURLItem[] = localHistory ? JSON.parse(localHistory) : []
    setLatestURL(history)
  }, [])

  useEffect(() => {
    if (latestURL.length !== 0) localStorage.setItem('history', JSON.stringify(latestURL))
  }, [latestURL])

  const shortenURL = useCallback(
    async (url: string) => {
      try {
        const encodedURL = encodeURI(url)
        const response = await fetch(`https://v.gd/create.php?format=json&url=${encodedURL}`)
        const shortenedURL = (await response.json()) as APIresponse

        if ('shorturl' in shortenedURL) {
          const newURL = { id: Date.now(), longURL: url, shortURL: shortenedURL.shorturl }
          setLatestURL((prev) => [newURL, ...prev].splice(0, 3))
          setInputedURL('')
        } else if ('errorcode' in shortenedURL) {
          setError({ ...shortenedURL, input: inputedURL })
        }
      } catch {
        setError({
          errorcode: 5,
          errormessage: 'Network error, please try again later.',
          input: inputedURL,
        })
      }
    },
    [inputedURL],
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (error && error.errorcode !== 5 && error.input === inputedURL) return
      if (inputedURL === '') {
        setError({ errorcode: 6, errormessage: 'Please add a link', input: inputedURL })
      } else if (latestURL.some(({ longURL }) => longURL === inputedURL)) {
        setError({ errorcode: 7, errormessage: 'Link already shortened', input: inputedURL })
      } else {
        setError(null)
        shortenURL(inputedURL)
      }
    },
    [shortenURL, inputedURL, error, latestURL],
  )

  const value = useMemo(
    () => ({ latestURL, handleSubmit, error, inputedURL, setInputedURL }),
    [latestURL, handleSubmit, error, inputedURL, setInputedURL],
  )

  return <ShortenURLContext.Provider value={value}>{children}</ShortenURLContext.Provider>
}

export default ShortenURLProvider
