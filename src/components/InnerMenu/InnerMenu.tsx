'use client'
import { VerticalNavProvider } from '@/@menu/contexts/verticalNavContext'
import AnalyticsSvg from '@/app/svg/AnalyticsSvg'
import BublSvg from '@/app/svg/BublSvg'
import ChatSvg from '@/app/svg/ChatSvg'
import DesktopSvg from '@/app/svg/DesktopSvg'
import FaceIdSvg from '@/app/svg/FaceIdSvg'
import FlaskSvg from '@/app/svg/FlaskSvg'
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'
import { Box, Typography } from '@mui/material'

const InnerMenu = () => {
  return (
    <VerticalNavProvider>
      <VerticalNav
        width={200}
        backgroundColor='transparent'
        customStyles={{ borderInlineEnd: 'none' }}
        className='border-0'
      >
        <Menu
          rootStyles={{ display: 'grid', paddingTop: '24px', width: '100%', border: '0px solid #E5E5E5' }}
          menuItemStyles={{
            button: () => ({ width: '100%', paddingInlineEnd: '0', paddingInlineStart: '0' }),
            label: () => ({})
          }}
        >
          <SubMenu
            label='Dashboard'
            icon={
              <>
                <AnalyticsSvg />
              </>
            }
            rootStyles={{ paddingLeft: '16px' }}
          >
            <MenuItem
              rootStyles={{ display: 'flex', justifyContent: 'start', justifyItems: 'start', marginBottom: '8px' }}
            >
              <Box className='rounded-[8px] flex items-center w-full py-[11px] pl-[16px] gap-[8px]  h-[40px]'>
                <AnalyticsSvg />
                <Typography>Dashboard</Typography>
              </Box>
            </MenuItem>

            <MenuItem
              rootStyles={{ display: 'flex', justifyContent: 'start', justifyItems: 'start', marginBottom: '8px' }}
            >
              <Box className='rounded-[8px] flex items-center w-full py-[11px] pl-[16px] gap-[8px]  h-[40px]'>
                <AnalyticsSvg />
                <Typography>Dashboard 2</Typography>
              </Box>
            </MenuItem>
          </SubMenu>

          <MenuItem
            rootStyles={{
              justifyContent: 'start',
              marginBottom: '8px',
              borderRadius: '8px',
              backgroundCoolor: '#8546EE',
              height: '40'
            }}
          >
            <Box className='rounded-[8px] flex items-center w-full py-[11px] pl-[16px] gap-[8px]  h-[40px] bg-[#8546EE]'>
              <FlaskSvg />
              <Typography className='text-[#F8F9FD]'>Lessons</Typography>
            </Box>
          </MenuItem>

          <MenuItem  rootStyles={{ display: 'flex', justifyContent: 'start', marginBottom: '8px' }}>
            <Box className='rounded-[8px] flex items-center w-full py-[11px] pl-[16px] gap-[8px]  h-[40px]'>
              <DesktopSvg />
              <Typography>Images & Files</Typography>
            </Box>
          </MenuItem>

          <MenuItem rootStyles={{ display: 'flex', justifyContent: 'start', marginBottom: '8px' }}>
            <Box className='rounded-[8px] flex items-center w-full py-[11px] pl-[16px] gap-[8px]  h-[40px]'>
              <BublSvg />
              <Typography>Insights</Typography>
            </Box>
          </MenuItem>
          <MenuItem rootStyles={{ display: 'flex', justifyContent: 'cestartnter', marginBottom: '8px' }}>
            <Box className='rounded-[8px] flex items-center w-full py-[11px] pl-[16px] gap-[8px]  h-[40px]'>
              <ChatSvg />
              <Typography>Chat</Typography>
            </Box>
          </MenuItem>
        </Menu>
      </VerticalNav>
    </VerticalNavProvider>
  )
}

export default InnerMenu
