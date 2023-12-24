import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import DetailsModal from 'components/DetailsModal'
import { TImageExtensions } from 'types'
import { useGetCharacterComics } from 'hooks/endpoints'

jest.mock('hooks/endpoints', () => ({
  useGetCharacterComics: jest.fn(() => ({ data: [], isLoading: false })),
}))

const mockDetailsItem = {
  id: 1,
  name: 'Test Character',
  thumbnail: {
    path: 'test/path',
    extension: 'jpg' as TImageExtensions,
  },
  description: 'Test description',
}

jest.mock('components/ComicsList', () => () => 'comics-list')
beforeEach(() => {
  (useGetCharacterComics as jest.Mock).mockReturnValue({
    data: [],
    isLoading: false,
    isFetching: false,
    refetch: jest.fn(),
  })
})

describe('DetailsModal', () => {
  test('renders DetailsModal correctly', () => {
    const onCloseModalMock = jest.fn()
    const openModal = true

    render(
      <DetailsModal
        detailsItem={mockDetailsItem}
        onCloseModal={onCloseModalMock}
        openModal={openModal}
      />
    )
    expect(screen.getByTestId('details-modal-test-id')).toBeInTheDocument()
    expect(screen.getByText('Details Of Test Character')).toBeInTheDocument()
    expect(screen.getByText('Test Character')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
    expect(screen.getByText('Comics Of Test Character')).toBeInTheDocument()
    expect(screen.getByText('comics-list')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('calls onCloseModal when "Close" button is clicked', () => {
    const onCloseModalMock = jest.fn()
    const openModal = true

    render(
      <DetailsModal
        detailsItem={mockDetailsItem}
        onCloseModal={onCloseModalMock}
        openModal={openModal}
      />
    )
    const closeButton = screen.getByText('Close')
    closeButton.click()

    expect(onCloseModalMock).toHaveBeenCalled()
  })

  test('matches snapshot', () => {
    const onCloseModalMock = jest.fn()
    const openModal = true

    const { asFragment } = render(
      <DetailsModal
        detailsItem={mockDetailsItem}
        onCloseModal={onCloseModalMock}
        openModal={openModal}
      />
    )
    expect(asFragment()).toMatchSnapshot() // Snapshot test
  })
})
