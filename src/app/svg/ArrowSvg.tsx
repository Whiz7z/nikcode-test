import React from 'react'

interface ArrowProps {
  className?: any
}


const ArrowSvg = (props : ArrowProps) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M15 6L9 12L15 18' stroke='#03030A' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

export default ArrowSvg
