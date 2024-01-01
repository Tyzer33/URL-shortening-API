export type LatestURLItem = {
  id: number
  longURL: string
  shortURL: string
}

type APIok = { shorturl: string }

type APIerror = {
  errorcode: number
  errormessage: string
  input: string
}

export type APIresponse = APIok | APIerror

export type ShorteningError = APIerror | null

export type ShortenedURLContextProps = {
  latestURL: LatestURLItem[]
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  inputedURL: string
  setInputedURL: React.Dispatch<React.SetStateAction<string>>
  error: ShorteningError
}

export type Measure = {
  px: string
  rem: string
}

export type TargetedElement = HTMLFormElement
export type TargetedElementRef = React.RefObject<HTMLFormElement>

export type BackgroundContextProps = {
  measure: Measure
  reference: TargetedElementRef
}

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse' | null
type Justify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | null
type Align = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | null

export type FlexProps = {
  direction?: Direction
  justify?: Justify
  align?: Align
}
