import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'

export type ImageSliderProps = {
  images: string[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const ImageSlider = ({ images }: ImageSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {images.map((image) => (
        <S.Image key={image} src={image} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ImageSlider
