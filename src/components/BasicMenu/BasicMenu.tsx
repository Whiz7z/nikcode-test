'use client'
import { VerticalNavProvider } from '@/@menu/contexts/verticalNavContext'
import CalendarSvg from '@/app/svg/CalendarSvg'
import LogoSvg from '@/app/svg/LogoSvg'
import ChartDotsSvg from '@/app/svg/ChartDotsSvg'
import UsersSvg from '@/app/svg/UsersSvg'
import FaceIdSvg from '@/app/svg/FaceIdSvg'
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'


export default function BasicMenu() {
  return (
    <VerticalNavProvider>
      <VerticalNav width={72} customStyles={{  borderInlineEnd: 'none' }} className='border-0'>
        <Menu
          rootStyles={{ display: 'grid', paddingTop: '24px', width: '100%', border: '0px solid #E5E5E5' }}
          menuItemStyles={{
            button: () => ({ width: '100%', paddingInlineEnd: '0', paddingInlineStart: '0' }),
            label: () => ({ display: 'grid', justifyContent: 'center' })
          }}
        >
          <MenuItem rootStyles={{ marginBottom: '30px' }}>
            <LogoSvg className='justify-self-center' />
          </MenuItem>

          <MenuItem
            rootStyles={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', marginBottom: '16px' }}
          >
            <UsersSvg />
          </MenuItem>

          <MenuItem rootStyles={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <CalendarSvg />
          </MenuItem>

          <MenuItem rootStyles={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <FaceIdSvg />
          </MenuItem>

          <MenuItem rootStyles={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <ChartDotsSvg />
          </MenuItem>
        </Menu>
      </VerticalNav>
    </VerticalNavProvider>
  )
}
