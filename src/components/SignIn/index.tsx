import React from 'react'
import SignMenu from '../LayoutSign'
import './styles.css'

const SignIn = () => {
  
  return (
    <>
      <SignMenu />
        <form className='sign_in'>
          <label htmlFor="">
              Email
              <input type='text' placeholder='email' autoFocus/>
          </label>
          <label htmlFor="">
              Password
              <input type='text' placeholder='password'/>
          </label>
          <input type='submit' value='Sign In'/>
        </form>
    </>
  )
}

export default SignIn
