import { render, screen } from '@testing-library/react'

import ImageSlider from '.'

describe('<ImageSlider />', () => {
  it('should render the heading', () => {
    render(<ImageSlider />)

    expect(
      screen.getByRole('heading', { name: /ImageSlider/i })
    ).toBeInTheDocument()
  })
})
