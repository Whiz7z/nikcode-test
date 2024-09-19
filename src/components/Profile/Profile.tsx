import Image from 'next/image'

import Box from '@mui/material/Box'


import { Typography } from '@mui/material'

import AvatarProfileImg from '@/assets/images/avatarProfile.png'


const Profile = () => {
  return (
    <Box className='bg-[#F8F9FD] w-full h-[148px] rounded-[8px] p-[24px] mt-[24px] flex content-center gap-[24px]'>
      <Image src={AvatarProfileImg} alt='Avatar Profile' className='w-[100px] h-[100px]' />
      <Box>
        <Typography className='text-[24px] h-[38px]   font-bold text-[#181819]' variantMapping={{ h2: 'h2' }}>
          Kristin Watson
        </Typography>

        <Typography className='text-[12px] h-[20px] text-gray-500 ' variantMapping={{ h2: 'h2' }}>
          Registration Data: <span className='text-[#181819]  text-[14px]'>03.07.2024</span>
        </Typography>

        <Box className='mt-[8px] w-[192px] h-[24px] bg-[#17B417] font-semibold flex items-center rounded-[24px] place-content-center'>
          <Typography className='text-[12px] h-[17px] text-[#F8F9FD] '>Ongoing Educational Program</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Profile
