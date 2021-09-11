import React from 'react'
import Link from 'next/link'

const LogoSecondary = ({ ...props }) => {
  return (
    <Link href='/'>
      <svg
        width='24'
        height='37'
        viewBox='0 0 24 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M8.68061 7.0004V36.6646C8.68061 36.8396 8.82039 36.9854 8.98812 36.9854H15.0126C15.1803 36.9854 15.3201 36.8396 15.3201 36.6646V7.0004C15.3201 6.82539 15.4599 6.67954 15.6276 6.67954H23.6928C23.9025 6.67954 24.0423 6.47537 23.9864 6.27119L22.2811 0.233347C22.2391 0.102089 22.1273 0 21.9875 0H2.01316C1.87339 0 1.76156 0.0875049 1.71963 0.233347L0.0143288 6.27119C-0.0415827 6.47537 0.098196 6.67954 0.307864 6.67954H8.37309C8.54083 6.67954 8.68061 6.82539 8.68061 7.0004ZM3.71846 3.83563L3.99802 2.74182C4.012 2.69807 4.05393 2.65432 4.09587 2.65432H19.9048C19.9468 2.65432 19.9887 2.68348 20.0027 2.74182L20.2822 3.83563C20.2962 3.90855 20.2543 3.98147 20.1844 3.98147H12.7202C12.6643 3.98147 12.6084 4.02523 12.6084 4.09815V34.229C12.6084 34.2874 12.5665 34.3457 12.4966 34.3457H11.4902C11.4342 34.3457 11.3783 34.3019 11.3783 34.229V4.08356C11.3783 4.02523 11.3364 3.96689 11.2665 3.96689H3.81631C3.74642 3.98147 3.70449 3.90855 3.71846 3.83563Z'
          fill='#F53C5A'
        />
      </svg>
    </Link>
  )
}

export default LogoSecondary
