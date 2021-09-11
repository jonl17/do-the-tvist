import React from 'react'
import Menu from '@cmp/Menu'
import Footer from '@cmp/Footer'

const PAGES = [
  { label: 'Verkefni', url: '/verkefni' },
  { label: 'Um stofuna', url: '/um-stofuna' },
  { label: 'Hafa samband', url: '/hafa-samband' },
]

const MainLayout: React.FC = ({ children }) => {
  return (
    <main>
      <Menu pages={PAGES} />
      <div className='min-h-screen'>{children}</div>
      <Footer />
    </main>
  )
}

export default MainLayout
