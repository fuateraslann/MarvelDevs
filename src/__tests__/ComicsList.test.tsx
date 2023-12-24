import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ComicsList from 'components/ComicsList'
import { TImageExtensions } from 'types'

const mockComics = [
  {
    id: 1,
    title: 'Comic 1',
    thumbnail: {
      path: 'test/path1',
      extension: 'jpg' as TImageExtensions,
    },
  },
  {
    id: 2,
    title: 'Comic 2',
    thumbnail: {
      path: 'test/path2',
      extension: 'jpg' as TImageExtensions,
    },
  },
]

describe('ComicsList', () => {
  test('renders ComicsList correctly with comics', () => {
    const isLoading = false

    render(<ComicsList isLoading={isLoading} comics={mockComics} />)

    expect(screen.getByTestId('comics-list')).toBeInTheDocument()
    expect(screen.getAllByTestId('image-list-item-bar')).toHaveLength(2)
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    expect(screen.queryByText('No comics found')).not.toBeInTheDocument()
  })

  test('renders ComicsList correctly when loading', () => {
    const isLoading = true
    render(<ComicsList isLoading={isLoading} comics={[]} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.queryByTestId('comics-list')).not.toBeInTheDocument()
    expect(screen.queryByTestId('image-list-item-bar')).not.toBeInTheDocument()
    expect(screen.queryByText('No comics found')).not.toBeInTheDocument()
  })

  test('renders ComicsList correctly with no comics', () => {
    const isLoading = false
    render(<ComicsList isLoading={isLoading} comics={[]} />)
    expect(screen.getByText('No comics found')).toBeInTheDocument()
    expect(screen.queryByTestId('comics-list')).not.toBeInTheDocument()
    expect(screen.queryByTestId('image-list-item-bar')).not.toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const isLoading = false

    const { asFragment } = render(
      <ComicsList isLoading={isLoading} comics={mockComics} />
    )
    expect(asFragment()).toMatchSnapshot() // Snapshot test
  })
})
