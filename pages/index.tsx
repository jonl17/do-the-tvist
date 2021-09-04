import type { NextPage } from 'next'
import Icon from '@cmp/Icon'

const Home: NextPage = () => {
  return (
    <div className='h-screen p-10'>
      <div className='mb-5'>
        <Icon className='hidden desktop:block' type='logo-main' />
        <Icon className='block desktop:hidden' type='logo-secondary' />
        <div className='flex gap-5 mt-2'>
          <Icon type='play' />
          <Icon type='pause' />
        </div>
        <h1>tvist</h1>
        <h2>tvist</h2>
        <p className='parag-large'>Allt eins og það á að vera</p>
        <p className='text-black-light'>
          Allt eins og það á að vera Allt eins og það á að vera Allt eins og það
          á að vera Allt eins og það á að vera Allt eins og það á að vera Allt
          eins og það á að vera Allt eins og það á að vera Allt eins og það á að
          vera
        </p>
      </div>
      <div className='flex flex-wrap gap-5 justify-between'>
        <div className='h-32 w-32 rounded-sm bg-primary hover:opacity-50' />
        <div className='h-36 w-20 rounded-sm bg-primary-light hover:opacity-50' />
        <div className='h-20 w-40 rounded-sm bg-primary-lightest hover:opacity-50' />
        <div className='h-52 w-40 rounded-sm bg-black hover:opacity-50' />
        <div className='h-40 w-52 rounded-sm bg-black-light hover:opacity-50' />
      </div>
    </div>
  )
}

export default Home
