import BoxItem from 'components/BoxItem'
import { SectionThreeProps } from 'types/api'
import * as S from './styles'

const SectionThree = ({ boxItem, title }: SectionThreeProps) => (
  <S.Wrapper>
    <S.HeadingContent>
      <S.Heading>{title}</S.Heading>
    </S.HeadingContent>
    <S.Box>
      {boxItem.map(({ title, text }, index) => (
        <BoxItem title={title} text={text} key={index} />
      ))}
    </S.Box>
  </S.Wrapper>
)

export default SectionThree
