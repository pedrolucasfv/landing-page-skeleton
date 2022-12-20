import ImageSlider from 'components/ImageSlider'
import { SectionTwoProps } from 'types/api'
import * as S from './styles'

const SectionTwo = ({ slider, text, color, title }: SectionTwoProps) => (
  <S.Wrapper color={color.color} id="sectionTwo">
    <S.Slider>
      <ImageSlider color={color} images={slider.data} />
    </S.Slider>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Info>
  </S.Wrapper>
)

export default SectionTwo
