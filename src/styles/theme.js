export const theme = {
  // Breakpoints
  mobile: '576px',
  // Colours
  primaryDark: '#2C2A3C',
  primaryLight: '#CCD6F6',
  accentLight: '#8892B0',
  main: "#64ffDA",
  accentMain: '#343078',

  // Font Related
  primaryFont: "'Source Sans Pro', sans-serif",
  monoFont: "'Source Code Pro', monospace", // Try to get a lighter font-weight

  // Font sizes
  xxs: '.8rem',
  xs: '.9rem', // '14px',
  s: '1rem',
  subh: 'clamp(.85rem, 1.5vw, 1rem)',
  m: '1.2rem',
  l: 'clamp(1.7rem, 3vw, 2rem)', //'1.8rem',
  xl: 'clamp(2.6rem, 5vw, 4rem)',//'4rem',
  title: 'clamp(3rem, 6vw, 5rem)'
  // get a font size set up for when the sidebar goes away
}
/*
Source Code Pro or Cousine
PT Mono looks awful as my nav link font.
PT Mono: Feels a little fuzzy. A lighter weight might be nicer.
*/