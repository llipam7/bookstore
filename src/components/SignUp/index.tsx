import React, { FormEvent, useState } from 'react'
import SignMenu from '../LayoutSign'
import styles from './styles.modules.scss'


type FormType = {
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
}

const SignUp = () => {
  const [form, setForm] = useState<FormType>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [formErrors, setFormErrors] = useState<Partial<FormType>>({})

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {userName, email, password, confirmPassword} = form
    setFormErrors({})

    if (!userName) {
      setFormErrors({
        ...formErrors,
        userName: 'Введите имя пользователя'
      })
    }
    if (!email) {
      setFormErrors({
        ...formErrors,
        email: 'Введите Email'
      })
    }

    if (!password) {
        setFormErrors({
            ...formErrors,
            password: 'Пароль не введён'
        })
    }
    if (password !== confirmPassword) {
        setFormErrors({
            ...formErrors,
            confirmPassword: 'Пароли не совпадают'
        })
    }
  }

  return (
    <>
      <SignMenu />
      <form className='sign_up' onSubmit={onFormSubmit}>
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
        {
                    formErrors?.confirmPassword && (
                        <label className={styles.error}/>
                    )
        }


          <div className='submit'>
            <input type='submit'  value='Sign In'/>
          </div>

      </form>
    </>
  )
}

export default SignUp
