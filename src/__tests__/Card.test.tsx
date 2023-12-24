import { render } from '@testing-library/react'
import CardComponent from 'components/Card'

describe('CardComponent', () => {
  const mockProps = {
    imgSrc: 'test-image.jpg',
    name: 'Test Name',
    contentStyle: { backgroundColor: 'red' },
    extras: <div>extras</div>,
  }

  test('renders CardComponent correctly', () => {
    const { asFragment, getByAltText, getByText } = render(
      <CardComponent {...mockProps} />
    )
    const image = getByAltText('Test Name')
    expect(image).toBeInTheDocument()
    expect(getByText('Test Name')).toBeInTheDocument()
    const content = getByText('Test Name').closest('div')
    expect(content).toHaveStyle('background-color: red')
    expect(getByText('extras')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot() // Snpashot test
  })

  test('renders CardComponent with default content style if not provided', () => {
    const { getByText, asFragment } = render(
      <CardComponent imgSrc="test-image.jpg" name="Test Name" />
    )

    const content = getByText('Test Name').closest('div')
    expect(content).toHaveStyle(
      'height: 120px; padding: 5px; display: flex; justify-content: space-between;'
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders CardComponent without extras', () => {
    const { queryByTestId, asFragment } = render(
      <CardComponent imgSrc="test-image.jpg" name="Test Name" />
    )
    expect(queryByTestId('extras')).toBeNull()
    expect(asFragment()).toMatchSnapshot()
  })
})
