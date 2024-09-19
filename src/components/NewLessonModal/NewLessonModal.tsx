import CustomTextField from '@/@core/components/mui/TextField'
import CrossSvg from '@/app/svg/CrossSvg'
import SearchSvg from '@/app/svg/SearchSvg'
import SmallSearchSvg from '@/app/svg/SmallSearchSvg'
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment
} from '@mui/material'
import React, { useState } from 'react'

interface NewLessonModalProps {
  open: boolean
  handleClose: () => void
  handleSubmit: (lessons: string[]) => void
}

let checkboxStyle = {
  '&.Mui-checked': {
    color: '#7D47F9'
  }
}

const lessonsOptions = [
  'Immunology Fundamentals',
  'Hematology',
  'Orthopedics and Musculoskeletal Health',
  'Obstetrics and Gynecology',
  'Cardiovascular System Studies',
  'Renal Physiology',
  'Endocrinology Basics',
  'Advanced Cardiopulmonary Systems'
]

const NewLessonModal = ({ open, handleClose, handleSubmit }: NewLessonModalProps) => {
  const [checkedLessons, setCheckedLessons] = useState<string[]>([])

  const handleCheckboxChange = (lesson: string) => {
    setCheckedLessons(prev => (prev.includes(lesson) ? prev.filter(l => l !== lesson) : [...prev, lesson]))
  }

  const onSend = () => {
    handleSubmit(checkedLessons)
    handleClose()
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '8px',
          boxShadow: '0px 10px 30px rgba(110, 42, 214, 0.2)',
          padding: '20px',
          minWidth: '400px',
          position: 'relative',
          backgroundColor: '#F5F7FC',
          overflow: 'visible'
        }
      }}
    >
      <div
        onClick={handleClose}
        className='cursor-pointer absolute right-[-8px] top-[-8px] w-[32px] h-[32px] rounded-[4px] bg-[#F8F9FD] grid place-content-center'
      >
        <CrossSvg />
      </div>
      <DialogTitle sx={{ textAlign: 'start', fontWeight: '600' }}>Request New Lesson</DialogTitle>
      <DialogContent>
        <Box>
          <Typography className='text-[16px] text-[#5C5C5E]'>
            Please select the lesson you want to request for the student
          </Typography>
        </Box>

        <Box>
          <CustomTextField
            id='input-with-icon-adornment'
            className='w-full h-[40px] bg-[transparent] grid content-center rounded-[8px] mt-[24px]'
            placeholder='Search'
            variant='outlined'
            sx={{ border: '1px solid #D9DADE' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  <SmallSearchSvg />
                </InputAdornment>
              )
            }}
          />
          <Typography className='text-[18px] text-[#181819] mt-[24px] mb-[16px]'>11 Options</Typography>
          <FormGroup>
            {lessonsOptions.map(lesson => (
              <FormControlLabel
                key={lesson}
                control={
                  <Checkbox
                    checked={checkedLessons.includes(lesson)}
                    onChange={() => handleCheckboxChange(lesson)}
                    sx={checkboxStyle}
                  />
                }
                label={lesson}
              />
            ))}
          </FormGroup>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            backgroundColor: '#D9DADE',
            color: '#5C5C5E',
            borderRadius: '40px',
            padding: '8px 24px',
            textTransform: 'none',
            height: '36px'
          }}
        >
          Close
        </Button>

        <Button
          onClick={onSend}
          sx={{
            backgroundColor: '#7D47F9',
            color: '#F8F9FD',
            borderRadius: '40px',
            padding: '8px 24px',
            textTransform: 'none',
            height: '36px'
          }}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewLessonModal
