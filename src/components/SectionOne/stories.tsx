import { Story, Meta } from '@storybook/react'
import { SectionOneProps } from 'types/api'
import SectionOne from '.'

export default {
  title: 'SectionOne',
  component: SectionOne,
  args: {
    image: {
      data: {
        attributes: {
          url: '/img/image-example.png'
        }
      }
    },
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    color: { color: 'dark' },
    title: 'Heading'
  }
} as Meta

export const Default: Story<SectionOneProps> = (args) => (
  <SectionOne {...args} />
)
