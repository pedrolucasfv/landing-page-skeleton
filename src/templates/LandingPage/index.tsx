import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SectionOne from 'components/SectionOne'
import SectionThree from 'components/SectionThree'
import SectionTwo from 'components/SectionTwo'
import { useState } from 'react'
import { ColorProps, LandingPageProps } from 'types/api'
import * as S from './styles'

const LandingPage = ({
  menu,
  sectionOne,
  sectionTwo,
  sectionThree,
  footer
}: LandingPageProps) => {
  const [color, setColor] = useState<ColorProps>({ color: 'dark' })

  const setMode = () => {
    if (color.color == 'dark') setColor({ color: 'light' })
    else setColor({ color: 'dark' })
  }
  return (
    <S.Wrapper>
      <Menu {...menu} color={color} setMode={setMode} />
      <SectionOne {...sectionOne} color={color} />
      <SectionTwo {...sectionTwo} color={color} />
      <SectionThree {...sectionThree} color={color} />
      <Footer {...footer} color={color} />
    </S.Wrapper>
  )
}
export default LandingPage
