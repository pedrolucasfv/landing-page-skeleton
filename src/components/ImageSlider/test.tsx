import '../../../.jest/match-media-mock'

import ImageSlider from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'
const args = {
  images: [
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
}
describe('<ImageSlider />', () => {
  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<ImageSlider {...args} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<ImageSlider {...args} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
