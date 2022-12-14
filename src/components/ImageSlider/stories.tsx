import { Story, Meta } from '@storybook/react'
import ImageSlider, { ImageSliderProps } from '.'

export default {
  title: 'ImageSlider',
  component: ImageSlider,
  args: {
    images: [
      '/img/image-example-slider-1.jpg',
      '/img/image-example-slider-2.jpg',
      '/img/image-example-slider-3.jpg'
    ]
  }
} as Meta

export const Default: Story<ImageSliderProps> = (args) => (
  <ImageSlider {...args} />
)
