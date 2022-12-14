import { Story, Meta } from '@storybook/react'
import SectionTwo, { SectionTwoProps } from '.'

export default {
  title: 'SectionTwo',
  component: SectionTwo,
  args: {
    images: [
      '/img/image-example-slider-1.jpg',
      '/img/image-example-slider-2.jpg',
      '/img/image-example-slider-3.jpg'
    ],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
  }
} as Meta

export const Default: Story<SectionTwoProps> = (args) => (
  <SectionTwo {...args} />
)
