import React from 'react'
import SignMenu from '../LayoutSign'

const SignUp = () => {
  return (
    <>
      <SignMenu />
      <form className='sign_up'>
        <label htmlFor="">
            Name
            <input type='text' placeholder='Your name' autoFocus/>
        </label>
        <label htmlFor="">
            Email
            <input type='text' placeholder='Your email'/>
        </label>
        <label htmlFor="">
            Password
            <input type='text' placeholder='Your password'/>
        </label>
        <label htmlFor="">
            Password
            <input type='text' placeholder='Confirm your password'/>
        </label>

        <input type='submit' value='Sign Up'/>

      </form>
    </>
  )
}

export default SignUp
