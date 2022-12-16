import * as S from './styles'
import React from 'react'
import { FooterProps } from 'types/api'
import { getImageUrl } from '../../../utils/getImageUrl'

const Footer = ({ image, boxItem }: FooterProps) => (
  <S.Wrapper>
    <S.Info>
      {boxItem.map((item, index) => (
        <S.ContentInfo key={index}>
          <S.Heading>{item.title}</S.Heading>
          <S.Text>{item.text}</S.Text>
        </S.ContentInfo>
      ))}
    </S.Info>
    <S.ContentImage>
      <S.Image src={getImageUrl(image.data.attributes.url)} />
    </S.ContentImage>
    <S.Copyright>Pedro Lucas F.V. 2022 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
