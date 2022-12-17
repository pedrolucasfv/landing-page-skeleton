import ImageSlider from 'components/ImageSlider'
import { SectionTwoProps } from 'types/api'
import * as S from './styles'

const SectionTwo = ({ slider, text, color }: SectionTwoProps) => (
  <S.Wrapper color={color.color}>
    <S.Slider>
      <ImageSlider images={slider.data} />
    </S.Slider>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default SectionTwo
