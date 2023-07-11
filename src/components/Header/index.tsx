import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import { SearchInput } from '../InputForSearch'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/' className='link'>
        BOOKSTORE
      </NavLink>
      <div className='input'>
        <SearchInput/>
      </div>
      <NavLink to='/search' className='link'>
        search
      </NavLink>
    </div>
  )
}

export default Header