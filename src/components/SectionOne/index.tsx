import { SectionOneProps } from 'types/api'
import { getImageUrl } from '../../../utils/getImageUrl'
import * as S from './styles'

const SectionOne = ({ text, image, color, title }: SectionOneProps) => {
  return (
    <S.Wrapper color={color.color}>
      <S.Info>
        <S.Heading>{title}</S.Heading>
        <S.Text>{text}</S.Text>
      </S.Info>
      <S.Image src={getImageUrl(image.data.attributes.url)} />
    </S.Wrapper>
  )
}
export default SectionOne
