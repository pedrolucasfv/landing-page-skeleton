import ImageSlider from 'components/ImageSlider'
import * as S from './styles'

export type SectionTwoProps = {
  images: string[]
  text: string
}

const SectionTwo = ({ images, text }: SectionTwoProps) => (
  <S.Wrapper>
    <S.Slider>
      <ImageSlider images={images} />
    </S.Slider>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default SectionTwo
