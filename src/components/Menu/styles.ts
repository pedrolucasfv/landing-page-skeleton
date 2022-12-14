import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  padding-left: 1.2rem;
  position: relative;
  background-color: ${theme.colors.lightBg};
  height: 6rem;
  border-bottom: 0.3rem solid lightgray;
  ${media.lessThan('medium')`
     padding-right: 1.2rem;
     height: 6rem;
 `}
`
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
  position: absolute ;
  margin-left: 10.5rem;
    transform: translateX(-50%);
 `}
`

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  color: black;
`

export const MenuGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  > div {
    margin: 0 1.5rem;
    ${media.lessThan('medium')`
    margin: 0 0.5rem
    `}
  }
  ${media.greaterThan('medium')`
    padding: 5rem;
    margin-right: 2rem;
    > button { 
    padding: 1rem 2rem;
   }
  `}
`

export const MenuNav = styled.div`
  ${media.greaterThan('medium')`
  margin-left: 2rem;
  `}
`

export const MenuLink = styled.a`
  position: relative;
  color: gray;
  font-size: 1.4rem;
  margin: 0.3rem 2.8rem 0;
  text-decoration: none;
  text-align: center;
  font-weight: bold;

  &:hover {
    color: ${theme.colors.primary};
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 1.5rem;
      ${media.lessThan('medium')`
          height: 0.4rem;
      `}
      border-bottom: 0.5rem solid ${theme.colors.primary};
      animation: hoverAnimation 0.2s forwards;
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`

type MenuToggleProps = {
  isOpenMenu: boolean
}
export const MenuToggle = styled.nav<MenuToggleProps>`
  ${({ isOpenMenu }) => css`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 20;
    width: 42%;
    left: 0;
    top: 0;

    bottom: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpenMenu ? 1 : 0};
    pointer-events: ${isOpenMenu ? 'all' : 'none'};

    > svg {
      margin: 1.5rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      flex: 1;
    }
    ${MenuLink} {
      color: black;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      transform: ${isOpenMenu ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const Sombra = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`
