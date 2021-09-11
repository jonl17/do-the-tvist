import type { GetStaticProps, NextPage } from 'next'
import { getMainMenu, getPageBySlug } from '@root/lib/api/prismic-api'
import { PageType } from '@src/types'
import PageTemplate from '@templates/Page'
import { MenuInterface, menuResolver } from '@root/data/resolvers'

type Props = {
  page: PageType
  menu: MenuInterface
}

const Home: NextPage<Props> = ({ page }) => {
  return (
    <PageTemplate>
      <h1>Frontpage magic</h1>
    </PageTemplate>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPageBySlug('frontpage')
  return {
    props: {
      page,
    },
  }
}
