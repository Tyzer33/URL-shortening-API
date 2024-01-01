import { createContext } from 'react'
import { BackgroundContextProps } from '../../utils/types'

const BackgroundContext = createContext<BackgroundContextProps | null>(null)

export default BackgroundContext
