import * as S from './styles'

export type SectionOneProps = {
  image: string
  text: string
}

const SectionOne = ({ image, text }: SectionOneProps) => (
  <S.Wrapper>
    <S.Text>{text}</S.Text>
    <S.Image src={image} />
  </S.Wrapper>
)

export default SectionOne
