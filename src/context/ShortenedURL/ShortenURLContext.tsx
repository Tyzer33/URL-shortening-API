import { createContext } from 'react'
import { ShortenedURLContextProps } from '../../utils/types'

const ShortenURLContext = createContext<ShortenedURLContextProps | null>(null)

export default ShortenURLContext
