const allPagesQuery = `{
  allPages {
    edges {
      node {
        _meta {
          uid
          id
          tags  
        }
      }
    }
  }
}`

const pageBySlugQuery = `
query PageBySlug($slug: String!, $lang: String!) {
  page(uid: $slug, lang: $lang) {
    _meta {
      uid
    }
  }
}

  `

const allPagesSlugQuery = `
  {
    allPages {
      edges {
        node {
          _meta {
            uid
            lang
          }
        }
      }
    }
  }
`

const getMainMenuQuery = `
{
  allMenus (tags_in: "MAIN_MENU") {
    edges {
      node {
        name
        pages {
          label
          page {
            ... on Page {
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  }
}
`

export { allPagesQuery, pageBySlugQuery, allPagesSlugQuery, getMainMenuQuery }
