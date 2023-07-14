import React from 'react'
import Header from '../Header'
import { NavLink, Outlet } from 'react-router-dom'
import './styles.css'

const SignMenu = () => {
  return (
    <>
      <div className='sign'>
        <NavLink to='/sign-in' className='link'>
          <h2>SIGN IN</h2>
        </NavLink>
        <NavLink to='/sign-up' className='link'>
          <h2>SIGN UP</h2>
        </NavLink>
      </div>
        {/* <div className='outlet'>
          <Outlet />
        </div> */}

    </>
  )
}

export default SignMenu