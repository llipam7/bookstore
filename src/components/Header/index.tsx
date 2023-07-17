import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import { SearchInput } from '../InputForSearch'
import search from '../../assets/search.svg'
import { ChangeTheme } from '../ChangeTheme'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../store/theme/selectors'
import { setDarkThemeAction, setLightThemeAction } from '../../store/theme/actions'
import day from '../../assets/day.svg'
import night from '../../assets/moon.svg'


const Header = () => {
  const state = useSelector(selectTheme)      
  const dispatch = useDispatch()
  const onClick = (theme: string) => {
      theme === 'light'
          ? dispatch(setLightThemeAction())
          : dispatch(setDarkThemeAction())
  }

  return (
    <header className='header'>
      <div className='changeTheme'>
        <button onClick={() => onClick('light')} style={{backgroundColor: 'lemonchiffon'}}>
          <img src={day} color='orange'/>
        </button>
        <button onClick={() => onClick('dark')} style={{backgroundColor: 'black'}}>
          <img src={night}/>
        </button>


      </div>
      <NavLink to='/' className='link'>
        <h1>
          BOOKSTORE
        </h1>
      </NavLink>
      <div className='input'>
        <SearchInput/>
        <NavLink to='/search' className='linkSearch'>
          <img src={search} alt="search" />
        </NavLink>
      </div>
      <NavLink to='/sign-in' className='link'>
        Sign In
      </NavLink>
    </header>
  )
}

export default Header