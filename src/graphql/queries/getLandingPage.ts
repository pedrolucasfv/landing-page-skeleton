const GET_LANDING_PAGE = /* GraphQL */ `
  fragment menu on LandingPage {
    menu {
      section1
      section2
      section3
      logo {
        data {
          attributes {
            url
          }
        }
      }
    }
  }

  fragment sectionOne on LandingPage {
    sectionOne {
      text
      image {
        data {
          attributes {
            url
          }
        }
      }
    }
  }

  fragment sectionTwo on LandingPage {
    sectionTwo {
      slider {
        data {
          attributes {
            url
          }
        }
      }
      text
    }
  }
  fragment sectionThree on LandingPage {
    sectionThree {
      title
      boxItem {
        title
        text
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...menu
          ...sectionOne
          ...sectionTwo
          ...sectionThree
        }
      }
    }
  }
`
export default GET_LANDING_PAGE
