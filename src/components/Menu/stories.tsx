import { Story, Meta } from '@storybook/react'
import { MenuProps } from 'types/api'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    logo: {
      data: {
        attributes: {
          url: '/img/image-example.png'
        }
      }
    },
    section1: 'Ínicio',
    section2: 'Galeria',
    section3: 'Contato',
    color: { color: 'dark' }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
