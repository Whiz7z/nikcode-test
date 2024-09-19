import React from 'react'

export interface IAppProps {
  w?: string|number,
  h?: string|number
}

const UsersSvg = (props: IAppProps) => {
  return (
    <svg
      width={props.w || '24'}
      height={props.h || '24'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='9' cy='7' r='4' stroke='#28282B' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M3 21V19C3 16.7909 4.79086 15 7 15H11C13.2091 15 15 16.7909 15 19V21'
        stroke='#28282B'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 3.12988C17.7699 3.58305 19.0078 5.17787 19.0078 7.00488C19.0078 8.83189 17.7699 10.4267 16 10.8799'
        stroke='#28282B'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 20.9999V18.9999C20.9896 17.1845 19.7578 15.6037 18 15.1499'
        stroke='#28282B'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default UsersSvg
