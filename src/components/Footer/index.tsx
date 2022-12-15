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
      <S.ContentInfo grid="grid4">
        <S.Heading>heading</S.Heading>
        <S.Text>{text}</S.Text>
      </S.ContentInfo>
    </S.Info>
    <S.Image src={image} />
  </S.Wrapper>
)

export default Footer
