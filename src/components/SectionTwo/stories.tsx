import { Story, Meta } from '@storybook/react'
import { SectionTwoProps } from 'types/api'
import SectionTwo from '.'

export default {
  title: 'SectionTwo',
  component: SectionTwo,
  args: {
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
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    title: 'slider',
    color: { color: 'light' }
  }
} as Meta

export const Default: Story<SectionTwoProps> = (args) => (
  <SectionTwo {...args} />
)
