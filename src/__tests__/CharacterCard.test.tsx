/* eslint-disable react/display-name */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CharacterCard from 'components/Card/CharacterCard'
import { TImageExtensions } from 'types'

jest.mock(
  'components/DetailsModal',
  () =>
    ({ openModal }: { openModal: boolean }) =>
      <div>{openModal ? <div>DetailsMock</div> : null}</div>
)
jest.mock(
  'components/Card',
  () =>
    ({
      name,
      imgSrc,
      extras,
    }: {
      name: string
      imgSrc: string
      extras: React.ReactNode
    }) =>
      (
        <div>
          <div>{name}</div>
          <div>{imgSrc}</div>
          <div>{extras}</div>
        </div>
      )
)

const mockCharacter = {
  id: 1,
  description: 'description of character',
  name: 'Test Character',
  thumbnail: {
    path: 'test/path',
    extension: 'jpg' as TImageExtensions,
  },
}
describe('CharacterCard', () => {
  test('renders CharacterCard correctly', () => {
    const { asFragment, getByText } = render(
      <CharacterCard character={mockCharacter} />
    )
    expect(getByText('Test Character')).toBeInTheDocument()
    expect(getByText('Details')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot() // Snapshot test
  })

  test('opens DetailsModal when "Details" button is clicked', () => {
    const { getByText, asFragment } = render(
      <CharacterCard character={mockCharacter} />
    )
    fireEvent.click(getByText('Details'))
    expect(getByText('DetailsMock')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot() // Snapshot test
  })
})
