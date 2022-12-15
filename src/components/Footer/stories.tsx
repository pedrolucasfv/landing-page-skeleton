import { Story, Meta } from '@storybook/react'
import Footer, { FooterProps } from '.'
import React from 'react'
export default {
  title: 'Footer',
  component: Footer,
  args: {
    image: '/img/image-example.png',
    text: 'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummLorem Ipsum is simply dummy'
  }
} as Meta

export const Default: Story<FooterProps> = (args) => <Footer {...args} />
