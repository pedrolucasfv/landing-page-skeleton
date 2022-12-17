import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import { AttributesProps } from 'types/api'
import { getImageUrl } from '../../../utils/getImageUrl'

export type ImageSliderProps = {
  images: AttributesProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false
}

const ImageSlider = ({ images }: ImageSliderProps) => (
  <S.Wrapper>
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
