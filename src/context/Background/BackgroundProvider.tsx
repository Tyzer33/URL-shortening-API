import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import BackgroundContext from './BackgroundContext'
import { TargetedElement, TargetedElementRef } from '../../utils/types'

type Props = {
  children: React.ReactNode
}

function BackgroundProvider({ children }: Props) {
  const [transitionPoint, setTransitionPoint] = useState(0)
  const [fontLoaded, setFontLoaded] = useState(false)
  const reference = useRef<TargetedElement>(null)

  const measure = useMemo(
    () => ({ px: `${transitionPoint}px`, rem: `${transitionPoint / 16}rem` }),
    [transitionPoint],
  )

  const calculateTransitionPoint = useCallback(
    (ref: TargetedElementRef) => {
      if (!ref.current) return
      const pos = ref.current.getBoundingClientRect().top + window.scrollY
      if (transitionPoint !== pos) setTransitionPoint(pos)
    },
    [transitionPoint],
  )

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true))
  }, [])

  useEffect(() => {
    calculateTransitionPoint(reference)
  }, [calculateTransitionPoint, fontLoaded])

  useEffect(() => {
    const handleResize = () => calculateTransitionPoint(reference)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [fontLoaded, calculateTransitionPoint])

  const value = useMemo(() => ({ measure, reference }), [measure])

  return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>
}

export default BackgroundProvider
