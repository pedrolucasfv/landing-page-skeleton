import { Story, Meta } from '@storybook/react'
import { BoxItemProps } from 'types/api'
import BoxItem from '.'

export default {
  title: 'BoxItem',
  component: BoxItem,
  args: {
    title: 'O que posso fazer aqui?',
    text: 'Aqui eu posso botar umas perguntinhas para serem respondidas'
  }
} as Meta

export const Default: Story<BoxItemProps> = (args) => <BoxItem {...args} />
