import React from 'react'
import Logo from '@cmp/Logo'

const Section: React.FC = ({ children }) => {
  return <div className='h-52 border-t-2 w-72'>{children}</div>
}

const Footer = () => {
  return (
    <div className='bg-black p-6 desktop:p-12 text-white flex'>
      <div className='w-1/2 pr-40'>
        <Section>
          <p>some stuff</p>
        </Section>
        <Section>
          <p>some stuff</p>
        </Section>
        <div>
          <Logo ghost />
        </div>
      </div>
      <div className='w-1/2'>
        <Section>
          <p>more</p>
        </Section>
      </div>
    </div>
  )
}

export default Footer
