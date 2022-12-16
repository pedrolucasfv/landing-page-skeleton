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

export type MenuProps = {
  logo: ImageProps
  section1: string
  section2: string
  section3: string
}

export type SectionOneProps = {
  image: ImageProps
  text: string
}

export type SectionTwoProps = {
  slider: SlideProps
  text: string
}

export type BoxItemProps = {
  title: string
  text: string
}

export type SectionThreeProps = {
  boxItem: BoxItemProps[]
  title: string
}

export type FooterProps = {
  image: string
  boxItem: BoxItemProps[]
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
