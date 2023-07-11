import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { setSearchValueAction } from '../../store/search/action'
import { Navigate, useParams } from 'react-router-dom'

export const SearchInput = () => {
  const {page} = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const searchValue = useSelector((state: AppState) => state.search.search)

  useEffect(() => {
    dispatch(setSearchValueAction(searchValue))
  }, [page])

  const handleSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    dispatch(setSearchValueAction(text))
  }, [page])

  return (
      <div className='searchInput'>
            <input type='text' value={searchValue} onChange={handleSearchValue} placeholder='Search...'/>  
      </div>
  )
}
