import { SectionOneProps } from 'types/api'
import { getImageUrl } from '../../../utils/getImageUrl'
import * as S from './styles'

const SectionOne = ({ text, image, color }: SectionOneProps) => {
  return (
    <S.Wrapper color={color.color}>
      <S.Info>
        <S.Heading>heading</S.Heading>
        <S.Text>{text}</S.Text>
      </S.Info>
      <S.Image src={getImageUrl(image.data.attributes.url)} />
    </S.Wrapper>
  )
}
export default SectionOne
