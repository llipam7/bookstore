import { useSelector } from 'react-redux'
import { AppState } from '../store'
import { SearchBooks } from '../components/SearchBooks'
// import { Pager } from '../components/Pager'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearSearchAction } from '../store/search/action'


export const SearchPage = () => {
  const { page } = useParams()

  const dispatch = useDispatch()

  const searchValue = useSelector((state: AppState) => state.search.search)

  const total = useSelector((state: AppState) => state.search.count)

  useEffect(() => {
    return function cleanUp () {
      dispatch(clearSearchAction())
    }
  }, [])


  return (
    <>
      <h2>Search results "{searchValue}"</h2>

      <SearchBooks />
    </>
  )
}
