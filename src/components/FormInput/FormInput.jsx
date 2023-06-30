import React from 'react'

const FormInput = ({type, name, label}) => {
  return (
    <>
    <label htmlFor={name} >{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          required
        />
    </>
  )
}

export default FormInput