import { BoxItemProps } from 'types/api'
import * as S from './styles'

const BoxItem = ({ text, title, color }: BoxItemProps) => (
  <S.Wrapper color={color.color}>
    <S.Title color={color.color}>{title}</S.Title>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default BoxItem
