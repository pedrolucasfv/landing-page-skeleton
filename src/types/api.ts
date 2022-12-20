type ImageProps = {
  data: AttributesProps
}

export type SlideProps = {
  data: AttributesProps[]
}

export type AttributesProps = {
  attributes: {
    url: string
  }
}

export type ColorProps = {
  color: 'light' | 'dark'
}

export type MenuProps = {
  logo: ImageProps
  section1: string
  section2: string
  section3: string
  color: ColorProps
  setMode: () => void
}

export type SectionOneProps = {
  image: ImageProps
  text: string
  color: ColorProps
  title: string
}

export type SectionTwoProps = {
  slider: SlideProps
  text: string
  color: ColorProps
  title: string
}

export type BoxItemProps = {
  title: string
  text: string
  color: ColorProps
}

export type SectionThreeProps = {
  boxItem: BoxItemProps[]
  title: string
  color: ColorProps
}

export type FooterProps = {
  image: ImageProps
  boxItem: BoxItemProps[]
  color: ColorProps
}

export type LandingPageProps = {
  menu: MenuProps
  sectionOne: SectionOneProps
  sectionTwo: SectionTwoProps
  sectionThree: SectionThreeProps
  footer: FooterProps
}

export type HomeProps = {
  landingPage: LandingPageProps
}
