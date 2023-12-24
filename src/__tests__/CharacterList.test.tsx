import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material'
import CharacterList from 'Layout/CharacterList'
import { useGetCharacterComics, useGetCharacters } from 'hooks/endpoints'

jest.mock('hooks/endpoints', () => ({
  useGetCharacters: jest.fn(),
  useGetCharacterComics: jest.fn(),
}))

describe('CharacterList', () => {
  const mockCharacters = [
    {
      id: 1,
      name: 'Character 1',
      thumbnail: { path: 'path1', extension: 'jpg' },
    },
    {
      id: 2,
      name: 'Character 2',
      thumbnail: { path: 'path2', extension: 'jpg' },
    },
  ]
  beforeEach(() => {
    (useGetCharacters as jest.Mock).mockReturnValue({
      data: mockCharacters,
      isLoading: false,
      isFetching: false,
      refetch: jest.fn(),
    })
    ;(useGetCharacterComics as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      isFetching: false,
      refetch: jest.fn(),
    })
  })

  test('renders CharacterList correctly', () => {
    const theme = createTheme()

    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <CharacterList />
      </ThemeProvider>
    )

    // Snapshot test
    expect(asFragment()).toMatchSnapshot()
  })
})
