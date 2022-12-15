import * as S from './styles'
import React from 'react'

export type FooterProps = {
  image: string
  text: string
}

const Footer = ({ image, text }: FooterProps) => (
  <S.Wrapper>
    <S.Info>
      <S.ContentInfo grid="grid1">
        <S.Heading>heading</S.Heading>
        <S.Text>{text}</S.Text>
      </S.ContentInfo>
      <S.ContentInfo grid="grid2">
        <S.Heading>heading</S.Heading>
        <S.Text>{text}</S.Text>
      </S.ContentInfo>
      <S.ContentInfo grid="grid3">
        <S.Heading>heading</S.Heading>
        <S.Text>{text}</S.Text>
      </S.ContentInfo>
    </S.Info>
    <S.ContentImage>
      <S.Image src={image} />
    </S.ContentImage>
    <S.Copyright>Pedro Lucas F.V. 2022 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
