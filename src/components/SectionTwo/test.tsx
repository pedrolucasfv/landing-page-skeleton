import { render, screen } from '@testing-library/react'

import SectionTwo from '.'

describe('<SectionTwo />', () => {
  it('should render the heading', () => {
    render(<SectionTwo />)

    expect(
      screen.getByRole('heading', { name: /SectionTwo/i })
    ).toBeInTheDocument()
  })
})
