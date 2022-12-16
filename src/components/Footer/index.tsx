import * as S from './styles'
import React from 'react'
import { BoxItemProps } from 'types/api'

export type FooterProps = {
  image: string
  boxItem: BoxItemProps[]
}

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
      <S.Image src={image} />
    </S.ContentImage>
    <S.Copyright>Pedro Lucas F.V. 2022 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
