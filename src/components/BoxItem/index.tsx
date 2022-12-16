import { BoxItemProps } from 'types/api'
import * as S from './styles'

const BoxItem = ({ text, title }: BoxItemProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default BoxItem
