import * as React from 'react';

export interface ISearchSvgProps {
}

export default function SearchSvg (props: ISearchSvgProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='10'
        cy='10'
        r='7'
        stroke='#363638'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M21 21L15 15' stroke='#363638' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
