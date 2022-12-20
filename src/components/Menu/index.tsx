import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu as MenuIcon } from '@styled-icons/heroicons-solid/Menu'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'
import { Moon } from '@styled-icons/heroicons-solid/Moon'
import { Sun } from '@styled-icons/heroicons-solid/Sun'

import { getImageUrl } from '../../../utils/getImageUrl'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import { MenuProps } from 'types/api'

const Menu = ({
  section1,
  section2,
  section3,
  logo,
  color,
  setMode
}: MenuProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <S.Wrapper color={color.color}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpenMenu(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link
          to="sectionOne"
          spy={true}
          smooth={true}
          offset={-6}
          duration={500}
        >
          <S.Logo src={getImageUrl(logo.data.attributes.url)} />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link
            to="sectionOne"
            spy={true}
            smooth={true}
            offset={-6}
            duration={500}
          >
            <S.MenuLink>{section1}</S.MenuLink>
          </Link>
          <Link
            to="sectionTwo"
            spy={true}
            smooth={true}
            offset={-46}
            duration={500}
          >
            <S.MenuLink>{section2}</S.MenuLink>
          </Link>

          <Link
            to="sectionThree"
            spy={true}
            smooth={true}
            offset={-66}
            duration={500}
          >
            <S.MenuLink>{section3}</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>
      {color.color == 'dark' && (
        <S.ButtonMode color={color.color} onClick={() => setMode()}>
          <Moon /> Dark Mode
        </S.ButtonMode>
      )}
      {color.color == 'light' && (
        <S.ButtonMode color={color.color} onClick={() => setMode()}>
          <Sun /> Light Mode
        </S.ButtonMode>
      )}

      {/* MENU LATERAL NO MOBILE */}
      {isOpenMenu && <S.Sombra> </S.Sombra>}
      <S.MenuToggle aria-hidden={!isOpenMenu} isOpenMenu={isOpenMenu}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsOpenMenu(false)}
        />
        <S.MenuNav>
          <Link
            to="sectionOne"
            spy={true}
            smooth={true}
            offset={-6}
            duration={500}
            onClick={() => setIsOpenMenu(false)}
          >
            <S.MenuLink>{section1}</S.MenuLink>
          </Link>

          <Link
            to="sectionTwo"
            spy={true}
            smooth={true}
            offset={-46}
            duration={500}
            onClick={() => setIsOpenMenu(false)}
          >
            <S.MenuLink>{section2}</S.MenuLink>
          </Link>

          <Link
            to="sectionThree"
            spy={true}
            smooth={true}
            offset={-66}
            duration={500}
            onClick={() => setIsOpenMenu(false)}
          >
            <S.MenuLink>{section3}</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  )
}
export default Menu
