import { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/heroicons-solid/Menu'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import { getImageUrl } from '../../../utils/getImageUrl'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import { MenuProps } from 'types/api'

const Menu = ({ section1, section2, section3, logo }: MenuProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  console.log(getImageUrl(logo.data.attributes.url))
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpenMenu(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <S.Logo src={getImageUrl(logo.data.attributes.url)} />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">{section1}</S.MenuLink>
          <S.MenuLink href="#">{section2}</S.MenuLink>
          <S.MenuLink href="#">{section3}</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      {isOpenMenu && <S.Sombra> </S.Sombra>}
      <S.MenuToggle aria-hidden={!isOpenMenu} isOpenMenu={isOpenMenu}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsOpenMenu(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">{section1}</S.MenuLink>
          <S.MenuLink href="#">{section2}</S.MenuLink>
          <S.MenuLink href="#">{section3}</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  )
}
export default Menu
