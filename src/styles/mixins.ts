import { css } from 'styled-components'
import { FlexProps } from '../utils/types'

// eslint-disable-next-line import/prefer-default-export
export const flex = ({ direction = null, justify = null, align = null }: FlexProps) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`
