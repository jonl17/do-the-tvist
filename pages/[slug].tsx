import { getAllPagesSlug, getPageBySlug } from '@root/lib/api/prismic-api'
import { PageType } from '@src/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PageTemplate from '@templates/Page'
import Link from 'next/link'

type Props = {
  page: PageType
}

const Page = ({ page }: Props) => {
  return (
    <PageTemplate>
      <h1>{page._meta.uid}</h1>
      <Link href='/'>Go Home son</Link>
    </PageTemplate>
  )
}

export default Page

export const getStaticProps: GetStaticProps = async (context) => {
  const page = await getPageBySlug(context?.params?.slug)
  return {
    props: {
      page,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async (slug) => {
  const allPages = await getAllPagesSlug()
  return {
    paths: allPages
      .filter((edge: any) => edge.node._meta.uid !== 'frontpage')
      .map((edge: any) => {
        return {
          params: { slug: edge.node._meta.uid },
        }
      }),
    fallback: false,
  }
}
