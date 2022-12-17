import BoxItem from 'components/BoxItem'
import { SectionThreeProps } from 'types/api'
import * as S from './styles'

const SectionThree = ({ boxItem, title, color }: SectionThreeProps) => (
  <S.Wrapper color={color.color}>
    <S.HeadingContent>
      <S.Heading>{title}</S.Heading>
    </S.HeadingContent>
    <S.Box>
      {boxItem.map(({ title, text }, index) => (
        <BoxItem title={title} text={text} key={index} color={color} />
      ))}
    </S.Box>
  </S.Wrapper>
)

export default SectionThree
