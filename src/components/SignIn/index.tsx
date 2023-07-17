import React from 'react'
import SignMenu from '../LayoutSign'
import './styles.css'
import { NavLink } from 'react-router-dom'

const SignIn = () => {
  
  return (
    <>
      <SignMenu />
        <form className='sign_in'>
          <label htmlFor="">
              Email
              <input type='text' placeholder='Your email' autoFocus/>
          </label>
          <label htmlFor="">
              Password
              <input type='text' placeholder='Your password'/>
          </label>
          <NavLink to='reset_password/' className='reset'>
            Forgot password?
          </NavLink>
          <div className='submit'>
            <input type='submit'  value='Sign In'/>
          </div>
        </form>
    </>
  )
}

export default SignIn
