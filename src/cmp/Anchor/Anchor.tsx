import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

type Props = {
  url: string
  label: string
  className?: string
}

const Anchor = ({ url, label, className = '' }: Props) => {
  const { asPath } = useRouter()
  return (
    <Link href={url}>
      <a
        className={cn(
          {
            'underline text-primary': asPath === url,
          },
          className
        )}
      >
        <h2>{label} </h2>
      </a>
    </Link>
  )
}

export default Anchor
