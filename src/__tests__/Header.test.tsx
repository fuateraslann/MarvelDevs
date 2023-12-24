import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material'
import Header from 'Layout/Header'

describe('Header', () => {
  test('renders Header correctly', () => {
    const theme = createTheme()

    const { getByAltText, getByText } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )

    const logo = getByAltText('Logo') as HTMLImageElement
    expect(logo).toBeInTheDocument()
    expect(logo.src).toContain('Marvel_Logo.png')

    const headerTitle = getByText('Marvel Devs')
    expect(headerTitle).toBeInTheDocument()
    expect(headerTitle).toHaveStyle('color: ' + theme.palette.primary.main)
  })

  test('renders Header with a custom theme', () => {
    const customTheme = createTheme({
      palette: {
        primary: {
          main: '#553335',
        },
      },
    })

    const { getByText } = render(
      <ThemeProvider theme={customTheme}>
        <Header />
      </ThemeProvider>
    )

    const headerTitle = getByText('Marvel Devs')
    expect(headerTitle).toBeInTheDocument()
    expect(headerTitle).toHaveStyle('color: #553335')
  })
})
