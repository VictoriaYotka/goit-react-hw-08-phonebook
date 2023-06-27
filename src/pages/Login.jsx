import FormInput from 'components/FormInput/FormInput'
import React from 'react'

const Login = () => {
  return (
    <form>
        <FormInput 
            type='email'
            name='email'
        />
        <FormInput 
            type='password'
            name='password'
        />
        <button type="submit">Log In</button>
    </form>
  )
}

export default Login