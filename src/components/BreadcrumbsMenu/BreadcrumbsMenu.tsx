import { Breadcrumbs, Link } from '@mui/material'

import UsersSmallSvg from '@/app/svg/UsersSmallSvg'

import UserSvg from '@/app/svg/UserSvg'
import ArrowSvg from '@/app/svg/ArrowSvg'

const BreadcrumbsMenu = () => {
  return (
    <Breadcrumbs aria-label='breadcrumb' className='mt-[16px]'>
      <Link underline='hover' color='inherit' href='/'>
        <div className='flex items-center h-[20px] gap-[4px]'>
          <ArrowSvg className='mr-[16px]' />
          <UsersSmallSvg />
          <span className='text-[14px] text-[#6E26DD]'>Students</span>
        </div>
      </Link>
      <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
        <div className='flex items-center h-[20px] gap-[4px]'>
          <UserSvg />
          <span className='text-[14px] text-[#2A2A2D]'>Student</span>
        </div>
      </Link>
    </Breadcrumbs>
  )
}

export default BreadcrumbsMenu
