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

export type LandingPageProps = {
  menu: MenuProps
  sectionOne: SectionOneProps
  sectionTwo: SectionTwoProps
}
