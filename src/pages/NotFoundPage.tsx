import React from 'react'
import './pageNotFound.css'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
      <>
        <div className='absent'>
          <span>
            PAGE NOT FOUND. PLEASE, GO TO 
              <NavLink to='/' style={{
                textDecoration: 'none'
              }}>
                <p>BOOKSTORE'S HOME PAGE</p>
              </NavLink>
          </span>
        </div>
      </>
  )
}

export default NotFoundPage