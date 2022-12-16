export type MenuProps = {
  logo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  section1: string
  section2: string
  section3: string
}

export type SectionOneProps = {
  image: string
  text: string
}

export type LandingPageProps = {
  menu: MenuProps
  sectionOne: SectionOneProps
}
