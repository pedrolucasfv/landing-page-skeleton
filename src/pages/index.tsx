import { GetStaticProps } from 'next'
import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { HomeProps } from 'types/api'
import LandingPage from 'templates/LandingPage'

export default function Home({ landingPage }: HomeProps) {
  return <LandingPage {...landingPage} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)
  console.log(landingPage.data.attributes)
  return {
    props: {
      landingPage: landingPage.data.attributes
    }
  }
}
