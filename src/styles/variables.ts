export const colors = {
  primary: 'hsl(180, 66%, 49%)',
  secondary: 'hsl(257, 27%, 26%)',

  primaryText: 'hsl(0, 100%, 100%)',
  secondaryText: 'hsl(255, 11%, 22%)',
  bodyText: 'hsl(257, 7%, 63%)',

  menuButton: 'hsl(257, 7%, 63%)',
  buttonHover: 'hsla(0, 100%, 100%, 0.5)',
  menuLine: 'hsla(0, 100%, 100%, 0.1)',
  cardLine: 'hsl(0, 0%, 75%)',
  error: 'hsl(0, 87%, 67%)',

  primaryBackground: 'hsl(0, 100%, 100%)',
  secondaryBackground: 'hsl(230, 25%, 95%)',
  footerBackground: 'hsl(260, 8%, 14%)',
}

const breakpoints = {
  tablet: 768,
  tabletLandscape: 900,
  desktop: 1024,
}

export const mediaQueries = {
  mobileOnly: `(max-width: ${(breakpoints.tablet - 1) / 16}rem)`,
  tabletPortraitUp: `(min-width: ${breakpoints.tablet / 16}rem)`,
  tabletLandscapeUp: `(min-width: ${breakpoints.tabletLandscape / 16}rem)`,
  desktopUp: `(min-width: ${breakpoints.desktop / 16}rem)`,
}
