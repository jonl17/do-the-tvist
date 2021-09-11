export interface MenuInterface {
  name: string
  pages: {
    url: string
    label: string
  }[]
}

export const menuResolver = (node: any): MenuInterface => ({
  name: node.name,
  pages: node.pages.map((p: any) => ({
    url: p.page._meta.uid,
    label: p.label,
  })),
})
