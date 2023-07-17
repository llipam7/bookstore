import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookItem } from '../components/SingleBook'

const SingleBookPage = () => {
  const navigate = useNavigate()

  const onBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <>
      <BookItem />
    </>
  )
}

export default SingleBookPage