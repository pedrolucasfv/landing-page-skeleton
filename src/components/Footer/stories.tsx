import { Story, Meta } from '@storybook/react'
import Footer from '.'
import React from 'react'
import { FooterProps } from 'types/api'
export default {
  title: 'Footer',
  component: Footer,
  args: {
    image: {
      data: {
        attributes: {
          url: '/img/image-example.png'
        }
      }
    },
    boxItem: [
      {
        title: 'Contato',
        text: 'Aqui eu posso botar umas perguntinhas para serem respondidas'
      },
      {
        title: 'Localização',
        text: 'aqui eu vou por alguma coisa'
      }
    ],
    color: { color: 'dark' }
  }
} as Meta

export const Default: Story<FooterProps> = (args) => <Footer {...args} />
