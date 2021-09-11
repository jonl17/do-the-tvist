import React from 'react'
import Icon from '@cmp/Icon'
import cn from 'classnames'

type Props = {
  ghost?: boolean
}

const Logo = ({ ghost }: Props) => {
  return (
    <a>
      <Icon
        className={cn('hidden desktop:block', {
          'svg-ghost': ghost,
        })}
        type='logo-main'
      />
      <Icon
        className={cn('desktop:hidden', {
          'svg-ghost': ghost,
        })}
        type='logo-secondary'
      />
    </a>
  )
}

export default Logo
