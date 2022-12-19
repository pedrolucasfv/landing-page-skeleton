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
      title
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
      title
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

  fragment footer on LandingPage {
    footer {
      boxItem {
        title
        text
      }
      image {
        data {
          attributes {
            url
          }
        }
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
          ...footer
        }
      }
    }
  }
`
export default GET_LANDING_PAGE
