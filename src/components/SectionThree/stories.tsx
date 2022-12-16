import { Story, Meta } from '@storybook/react'
import { SectionThreeProps } from 'types/api'
import SectionThree from '.'

export default {
  title: 'SectionThree',
  component: SectionThree,
  args: {
    title: 'Perguntas ',
    boxItem: [
      {
        title: 'O que vamos fazer aqui?',
        text: 'podemos responder umas perguntinhas para tirar dúvidas'
      },
      {
        title: 'Que tipo de perguntas?',
        text: 'As que você se sentir a vontade para responder'
      }
    ]
  }
} as Meta

export const Default: Story<SectionThreeProps> = (args) => (
  <SectionThree {...args} />
)
