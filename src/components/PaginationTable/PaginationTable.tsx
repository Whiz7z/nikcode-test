'use client'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Typography,
  PaginationItem,
  TableFooter
} from '@mui/material'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import {
  CustomFirstPageIcon,
  CustomLastPageIcon,
  CustomNextPageIcon,
  CustomPreviousPageIcon
} from '@/app/svg/NavigationIcons'
import NewLessonModal from '../NewLessonModal/NewLessonModal'
interface Lesson {
  name: string
  date: string
  status: string
}

const initialLessons = [
  { name: 'Endocrinology Basics', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Cardiovascular System Studies', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Renal Physiology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Hematology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Immunology Fundamentals', date: 'June 07, 2024', status: 'Done' },
  { name: 'Advanced Cardiopulmonary Systems', date: 'June 07, 2024', status: 'Done' },
  { name: 'Dermatology and Skin Disorders', date: 'June 07, 2024', status: 'Done' },
  { name: 'Orthopedics and Musculoskeletal Health', date: 'June 07, 2024', status: 'Done' },
  { name: 'Psychiatry and Behavioral Health', date: 'June 07, 2024', status: 'Completed' },
  { name: 'Obstetrics and Gynecology', date: 'June 07, 2024', status: 'Canceled' },
  //
  { name: 'Endocrinology Basics', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Cardiovascular System Studies', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Renal Physiology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Hematology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Immunology Fundamentals', date: 'June 07, 2024', status: 'Done' },
  { name: 'Advanced Cardiopulmonary Systems', date: 'June 07, 2024', status: 'Done' },
  { name: 'Dermatology and Skin Disorders', date: 'June 07, 2024', status: 'Done' },
  { name: 'Orthopedics and Musculoskeletal Health', date: 'June 07, 2024', status: 'Done' },
  { name: 'Psychiatry and Behavioral Health', date: 'June 07, 2024', status: 'Completed' },
  { name: 'Obstetrics and Gynecology', date: 'June 07, 2024', status: 'Canceled' },
  //
  { name: 'Endocrinology Basics', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Cardiovascular System Studies', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Renal Physiology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Hematology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Immunology Fundamentals', date: 'June 07, 2024', status: 'Done' },
  { name: 'Advanced Cardiopulmonary Systems', date: 'June 07, 2024', status: 'Done' },
  { name: 'Dermatology and Skin Disorders', date: 'June 07, 2024', status: 'Done' },
  { name: 'Orthopedics and Musculoskeletal Health', date: 'June 07, 2024', status: 'Done' },
  { name: 'Psychiatry and Behavioral Health', date: 'June 07, 2024', status: 'Completed' },
  { name: 'Obstetrics and Gynecology', date: 'June 07, 2024', status: 'Canceled' },
  //
  { name: 'Endocrinology Basics', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Cardiovascular System Studies', date: 'June 07, 2024', status: 'Requested' },
  { name: 'Renal Physiology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Hematology', date: 'June 07, 2024', status: 'Booked' },
  { name: 'Immunology Fundamentals', date: 'June 07, 2024', status: 'Done' },
  { name: 'Advanced Cardiopulmonary Systems', date: 'June 07, 2024', status: 'Done' },
  { name: 'Dermatology and Skin Disorders', date: 'June 07, 2024', status: 'Done' },
  { name: 'Orthopedics and Musculoskeletal Health', date: 'June 07, 2024', status: 'Done' },
  { name: 'Psychiatry and Behavioral Health', date: 'June 07, 2024', status: 'Completed' },
  { name: 'Obstetrics and Gynecology', date: 'June 07, 2024', status: 'Canceled' }
]

const statusStyles: { [key: string]: React.CSSProperties } = {
  Requested: {
    color: '#6324F4', // Text color
    backgroundColor: '#E4D9FF', // Light background color
    padding: '3.5px 12px',
    borderRadius: '24px', // Rounded pill shape
    fontSize: '12px',
    display: 'inline-block',
    fontWeight: '500',
    textAlign: 'center'
  },
  Booked: {
    color: '#B0470A',
    backgroundColor: '#FFE3D1',
    padding: '3.5px 12px',
    borderRadius: '24px',
    fontSize: '12px',
    display: 'inline-block',
    fontWeight: '500',
    textAlign: 'center'
  },
  Done: {
    color: '#0959BD',
    backgroundColor: '#D3E5FF',
    padding: '3.5px 12px',
    borderRadius: '24px',
    fontSize: '12px',
    display: 'inline-block',
    fontWeight: '500',
    textAlign: 'center'
  },
  Completed: {
    color: '#0D7E1E',
    backgroundColor: '#D6FFDC',
    padding: '3.5px 12px',
    borderRadius: '24px',
    fontSize: '12px',
    display: 'inline-block',
    fontWeight: '500',
    textAlign: 'center'
  },
  Canceled: {
    color: '#C70B0B',
    backgroundColor: '#F7D6D9',
    padding: '3.5px 12px',
    borderRadius: '24px',
    fontSize: '12px',
    display: 'inline-block',
    fontWeight: '500',
    textAlign: 'center'
  }
}

const rowsPerPage = 5

const PaginationTable = () => {
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState(false)
  const [lessons, setLessons] = useState(initialLessons)

 
  const handlePageChange = (event,  newPage: number) => {
    setPage(newPage)
  }

  // Calculate paginated rows
  const paginatedLessons = lessons.slice((page - 1) * rowsPerPage, page * rowsPerPage)

  const openModalHandler = () => {
    setModal(true)
  }

  const handleSubmitNewLessons = (selectedLessons: string[]) => {
    console.log('selectedLessons', selectedLessons)
    const now = new Date()
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    })
    const newLessons = selectedLessons.map(lesson => ({
      name: lesson,
      date: formattedDate,
      status: 'Requested'
    }))
    setLessons((prevLessons: Lesson[]) => [...prevLessons, ...newLessons])
  }

  return (
    <>
      {modal && (
        <NewLessonModal open={modal} handleClose={() => setModal(false)} handleSubmit={handleSubmitNewLessons} />
      )}
      <TableContainer style={{ margin: '20px 0' }}>
        <Table className='bg-[#F8F9FD] rounded-[8px] '>
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} className='py-[24px] px-[24px]'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center'
                  }}
                >
                  <Fab
                    color='primary'
                    variant='extended'
                    onClick={() => openModalHandler()}
                    sx={{
                      backgroundColor: '#6E2AD6',
                      color: '#FFFFFF',
                      boxShadow: '0px 10px 15px rgba(110, 42, 214, 0.2)',
                      padding: '10px 20px',
                      textTransform: 'none',
                      fontWeight: 'regular',
                      fontSize: '14px',
                      borderRadius: '30px',
                      height: '36px',
                      width: '130px',
                      '&:hover': {
                        backgroundColor: '#6E2AD6',
                        boxShadow: '0px 10px 15px rgba(110, 42, 214, 0.4)' 
                      }
                    }}
                  >
                    Request Lab
                  </Fab>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'regular',
                  fontSize: '14px',
                  color: '#5C5C5E', 
                  textAlign: 'left',
                  position: 'relative',
                  '&:not(:last-child)::after': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: 'calc(50% - 7px)',
                    height: '14px',
                    width: '1px',
                    backgroundColor: '#E5E7EB'
                  },
                  width: '50%' 
                }}
              >
                NAME
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'regular',
                  fontSize: '14px',
                  color: '#5C5C5E',
                  textAlign: 'left',
                  position: 'relative',
                  '&:not(:last-child)::after': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: 'calc(50% - 7px)',
                    height: '14px',
                    width: '1px',
                    backgroundColor: '#E5E7EB'
                  },
                  width: '25%'
                }}
              >
                DATE
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 'regular',
                  fontSize: '14px',
                  color: '#5C5C5E',
                  textAlign: 'left',
                  width: '25%'
                }}
              >
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedLessons.map((lesson, index) => (
              <TableRow key={index}>
                <TableCell>{lesson.name}</TableCell>
                <TableCell>{lesson.date}</TableCell>
                <TableCell>
                  <span style={statusStyles[lesson.status]}>{lesson.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  
                  <Typography
                    sx={{
                      color: '#87878A',
                      fontSize: '14px'
                    }}
                  >
                    Showing {page * rowsPerPage - rowsPerPage + 1} to {Math.min(page * rowsPerPage, lessons.length)} of{' '}
                    {lessons.length} lessons
                  </Typography>
                  
                  <Pagination
                    count={Math.ceil(lessons.length / rowsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    showFirstButton
                    showLastButton
                    color='primary'
                    renderItem={item => (
                      <PaginationItem
                        components={{
                          first: CustomFirstPageIcon,
                          last: CustomLastPageIcon,
                          previous: CustomPreviousPageIcon,
                          next: CustomNextPageIcon
                        }}
                        {...item}
                        sx={{
                          backgroundColor: item.page === page ? '#7D47F9 !important' : '#EDEEF2 !important',
                          color: item.page === page ? '#F8F9FD !important' : '#363638 !important',
                          '&:hover': {
                            backgroundColor: '#EDE9FE',
                            color: '#5A1EB9'
                          }
                        }}
                      />
                    )}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}

export default PaginationTable
