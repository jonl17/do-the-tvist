import React, { useState } from 'react'
import Logo from '@cmp/Logo'
import cn from 'classnames'
import Anchor from '@cmp/Anchor'
import Burger from '@cmp/Burger'

type MenuProps = {
  pages: {
    url: string
    label: string
  }[]
}

const Menu = ({ pages = [] }: MenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openMobileMenu = () => setMobileMenuOpen(true)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className='px-6 desktop:px-12 h-28 flex items-center justify-between'>
      <Logo />
      <div>
        <div className='block desktop:hidden'>
          <Burger
            isOpen={mobileMenuOpen}
            open={openMobileMenu}
            close={closeMobileMenu}
          />
        </div>
        <div className='hidden desktop:flex'>
          {pages.map((page, i) => (
            <Anchor
              key={i}
              className={cn({ 'mr-6': i !== pages.length - 1 })}
              {...page}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
