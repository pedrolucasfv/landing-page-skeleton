import { Story, Meta } from '@storybook/react'
import Footer, { FooterProps } from '.'
import React from 'react'
export default {
  title: 'Footer',
  component: Footer,
  args: {
    image: '/img/image-example.png',
    boxItem: [
      {
        title: 'Contato',
        text: 'Aqui eu posso botar umas perguntinhas para serem respondidas'
      },
      {
        title: 'Localização',
        text: 'aqui eu vou por alguma coisa'
      }
    ]
  }
} as Meta

export const Default: Story<FooterProps> = (args) => <Footer {...args} />
