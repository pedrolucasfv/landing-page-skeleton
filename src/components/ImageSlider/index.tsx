import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import { AttributesProps, ColorProps } from 'types/api'
import { getImageUrl } from '../../../utils/getImageUrl'

export type ImageSliderProps = {
  images: AttributesProps[]
  color: ColorProps
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  swipe: true,
  autoplay: true,
  vertical: true
}

const ImageSlider = ({ images, color }: ImageSliderProps) => (
  <S.Wrapper color={color.color}>
    <Slider settings={settings}>
      {images.map((image) => (
        <S.Image
          key={image.attributes.url}
          src={getImageUrl(image.attributes.url)}
        />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ImageSlider
