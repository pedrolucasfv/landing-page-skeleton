import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SectionOne from 'components/SectionOne'
import SectionThree from 'components/SectionThree'
import SectionTwo from 'components/SectionTwo'
import { LandingPageProps } from 'types/api'
import * as S from './styles'

const LandingPage = ({
  menu,
  sectionOne,
  sectionTwo,
  sectionThree,
  footer
}: LandingPageProps) => (
  <S.Wrapper>
    <Menu {...menu} />
    <SectionOne {...sectionOne} />
    <SectionTwo {...sectionTwo} />
    <SectionThree {...sectionThree} />
    <Footer {...footer} />
  </S.Wrapper>
)

export default LandingPage
