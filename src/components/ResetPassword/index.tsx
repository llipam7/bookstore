import React from 'react'
import './styles.css'

const ResetPassword = () => {
  
  return (
    <>
        <form className='sign_in'>
          <h2>
            RESET PASSWORD
          </h2>
          <label htmlFor="">
              Email
              <input type='text' placeholder='Your email' autoFocus/>
          </label>
          <input type='submit' value='RESET'/>
        </form>
    </>
  )
}

export default ResetPassword
