import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 3V21H21' stroke='#212124' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='9' cy='9' r='2' stroke='#212124' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='19' cy='7' r='2' stroke='#212124' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <circle cx='14' cy='15' r='2' stroke='#212124' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M10.16 10.62L12.5 13.5'
        stroke='#212124'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.088 13.328L17.925 8.742'
        stroke='#212124'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
