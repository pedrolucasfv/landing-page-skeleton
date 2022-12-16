import Menu from 'components/Menu'
import Footer from 'components/Footer'
import SectionOne from 'components/SectionOne'
import SectionTwo from 'components/SectionTwo'

import { GetStaticProps } from 'next'
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'
import SectionThree from 'components/SectionThree'

export default function Home({
  menu,
  sectionOne,
  sectionTwo,
  sectionThree
}: LandingPageProps) {
  console.log(sectionThree)
  return (
    <>
      <Menu {...menu} />
      <SectionOne {...sectionOne} />
      <SectionTwo {...sectionTwo} />
      <SectionThree {...sectionThree} />
      <Footer
        image="/img/image-example.png"
        text="Lorem Ipsum is simply dummy Lorem Ipsum is simply dummLorem Ipsum is simply dummy"
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)
  console.log(landingPage.data.attributes)
  return {
    props: {
      ...landingPage.data.attributes
    }
  }
}
