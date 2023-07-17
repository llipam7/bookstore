import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import './styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { selectTheme } from '../../store/theme/selectors'
import { setDarkThemeAction, setLightThemeAction } from '../../store/theme/actions'
import day from '../../assets/day.svg'
import night from '../../assets/moon.svg'


const Layout = () => {
      const state = useSelector(selectTheme)      
      const dispatch = useDispatch()
      const onClick = (theme: string) => {
          theme === 'light'
              ? dispatch(setLightThemeAction())
              : dispatch(setDarkThemeAction())
      }

  return (
    <>
      <div className='page'>
        <Header />

        <div className={`outlet + ${state.theme}`}>

          <Outlet />
        </div>

        <footer className='footer'>
          <p>@2023Bookstore</p>
          <p>All rights reserved</p>
        </footer>
      </div>
    </>
  )
}
export default Layout