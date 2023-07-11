import React from 'react'
import { useAuthContext } from "../../hoc/AuthProvider"

const AuthButtons = () => {
  const { isAuthorized, login, logout } = useAuthContext()

  return (
    <div>
      <div>
        isAuthorized: {isAuthorized ? 'true' : 'false'}
      </div>
      {
        isAuthorized
          ? <button onClick={logout}>Logout</button>
          : <button onClick={login}>Login</button>
      }
    </div>
  )
}

export default AuthButtons