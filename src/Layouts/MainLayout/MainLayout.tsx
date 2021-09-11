import React, { useEffect } from 'react'
import Menu from '@cmp/Menu'

const PAGES = [
  { label: 'Verkefni', url: '/verkefni' },
  { label: 'Um stofuna', url: '/um-stofuna' },
  { label: 'Hafa samband', url: '/hafa-samband' },
]

const MainLayout: React.FC = ({ children }) => {
  return (
    <main>
      <Menu pages={PAGES} />
      {children}
    </main>
  )
}

export default MainLayout
