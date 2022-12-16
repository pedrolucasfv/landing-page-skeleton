const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          menu {
            logo {
              data {
                attributes {
                  url
                }
              }
            }
            section1
            section2
            section3
          }
        }
      }
    }
  }
`
export default GET_LANDING_PAGE
