import { render, fireEvent, screen } from '@testing-library/react'

import Menu from '.'

const args = {
  logo: {
    data: {
      attributes: {
        url: '/img/logo-example.png'
      }
    }
  },
  section1: 'Ínicio',
  section2: 'Galeria',
  section3: 'Contato'
}

describe('<Menu />', () => {
  it('should render menu', () => {
    render(<Menu {...args} />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })
  it('should render menu', () => {
    render(<Menu {...args} />)
    //selecionar o MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //verificar se o menu ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    //clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
