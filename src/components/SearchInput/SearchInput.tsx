
import Image from 'next/image'

import InputAdornment from '@mui/material/InputAdornment'

import SearchSvg from '@/app/svg/SearchSvg'


import CustomTextField from '@core/components/mui/TextField'
import LanguageSvg from '@/app/svg/LanguageSvg'
import MoonStarsSvg from '@/app/svg/MoonStarsSvg'
import avatarImg from '@/assets/images/avatarSearch.png'

const SearchInput = () => {
  return (
    <CustomTextField
      id='input-with-icon-adornment'
      className='w-full h-[56px] bg-[#FCFDFF] grid content-center rounded-[8px] pl-[27px] pr-[24px]'
      placeholder='Search ⌘K'
      
      InputProps={{
        startAdornment: (
          <InputAdornment position='end'>
            <SearchSvg />
          </InputAdornment>
        ),

        endAdornment: (
          <>
            <InputAdornment position='end' className='cursor-pointer'>
              <LanguageSvg />
            </InputAdornment>
            <InputAdornment position='end' className='cursor-pointer'>
              <MoonStarsSvg />
            </InputAdornment>
            <InputAdornment position='end' className='ml-[24px] cursor-pointer'>
              <Image src={avatarImg} alt='avatar' width={40} height={40} />
            </InputAdornment>
          </>
        )
      }}
    />
  )
}

export default SearchInput
