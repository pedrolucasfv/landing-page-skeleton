import { render, screen } from '@testing-library/react'

import SectionOne from '.'

const args = {
  image: '/img/image-example.png',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
}

describe('<SectionOne />', () => {
  it('should render the params text', () => {
    render(<SectionOne {...args} />)

    expect(
      screen.getByRole('heading', { name: /Lorem Ipsum/i })
    ).toBeInTheDocument()
  })
})
