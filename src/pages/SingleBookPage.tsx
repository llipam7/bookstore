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
      <div>
        <h1>Single book</h1>
      </div>

      {/* <div>
        <h2 onClick={onBackClick}>HOME PAGE</h2>
      </div> */}

      <BookItem />
    </>
  )
}

export default SingleBookPage