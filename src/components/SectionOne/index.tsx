import { SectionOneProps } from 'types/api'
import * as S from './styles'

const SectionOne = ({ image, text }: SectionOneProps) => (
  <S.Wrapper>
    <S.Info>
      <S.Heading>heading</S.Heading>
      <S.Text>{text}</S.Text>
    </S.Info>
    <S.Image src={image} />
  </S.Wrapper>
)

export default SectionOne
