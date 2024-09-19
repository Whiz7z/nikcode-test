import * as React from 'react'

export interface IAppProps {}

export default function CalendarSvg(props: IAppProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='4'
        y='5'
        width='16'
        height='16'
        rx='2'
        stroke='#212124'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M16 3V7' stroke='#212124' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M8 3V7' stroke='#212124' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4 11H20' stroke='#212124' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <rect
        x='8'
        y='15'
        width='2'
        height='2'
        stroke='#212124'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
