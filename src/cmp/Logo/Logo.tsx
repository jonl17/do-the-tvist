import React from 'react'
import Link from 'next/link'
import Icon from '@cmp/Icon'

const Logo = () => {
  return (
    <a>
      <Icon className='hidden desktop:block' type='logo-main' />
      <Icon className='desktop:hidden' type='logo-secondary' />
    </a>
  )
}

export default Logo
