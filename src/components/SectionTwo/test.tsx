import { screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import SectionTwo from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

const args = {
  slider: {
    data: [
      {
        attributes: {
          url: '/img/image-example-slider-1.jpg'
        }
      },

      {
        attributes: {
          url: '/img/image-example-slider-2.jpg'
        }
      },

      {
        attributes: {
          url: '/img/image-example-slider-3.jpg'
        }
      }
    ]
  },
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
}

describe('<SectionTwo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SectionTwo {...args} />)

    expect(
      screen.getByRole('heading', { name: /Lorem Ipsum/i })
    ).toBeInTheDocument()
  })
})
